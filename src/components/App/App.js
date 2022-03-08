import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from '../Header/Header'

import Main from '../Main/Main';
import Register from '../Register/Register';

import Login from '../Login/Login';
import Movies from '../Movies/Movies'
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const history = useHistory();

  useEffect(() => {

    getUserDataFromLocal();
}, []);

  function registration(name, email, password) {
    mainApi.register(name, email, password)
    .then(() => {
      history.push("/signin");
    }).catch((err)=> {
      console.log(err)
    })
  }

  function authorization(email, password) {
    mainApi.login(email, password)
    .then((data) => {
      mainApi.getContent(data)
        .then((res) => {
          setCurrentUser(res);
          localStorage.setItem('currentUser', JSON.stringify(res));
          history.push('/');
        })
    }).catch((err) => {
      console.error(`Статус ошибки: ${err.status}`);
      console.log(email, password);
      console.log(err)
    })
  }

  function handleUpdateUser(name, email) {
    mainApi.editUserBio(name, email)
      .then(res => {
        localStorage.setItem('currentUser', JSON.stringify(res));
        setCurrentUser({
          ...currentUser,
          email: res.email,
          name: res.name,
      });
      })
    .catch(err => console.log(err))
  }

  function handleSignOut() {
    mainApi.logout()
      .then(() => {
        history.push('/signin');
        setCurrentUser(null);
        localStorage.clear();
      });
  }

  function getUserDataFromLocal() {
    setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));

  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/signup">
            <Register
              registration={registration}
            />
          </Route>

          <Route exact path="/signin">
            <Login
              authorization={authorization}
            />
          </Route>

          <Route path="/users/me">
            <Profile
              onUpdateUser={handleUpdateUser}
              logout={handleSignOut}
            />
          </Route>

          <ProtectedRoute path="/movies">
            <Movies

            />
          </ProtectedRoute>

          <ProtectedRoute path="/saved-movies">
            <SavedMovies />
          </ProtectedRoute>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
