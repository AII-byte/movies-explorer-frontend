import React, {useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation, Redirect } from 'react-router-dom';
import mainApi from "../../utils/MainApi";
import moviesApi from '../../utils/MoviesApi';

import CurrentUserContext from '../../contexts/currentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies'
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

import messages from '../../utils/messages';


function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [allMovies, setAllmovies] = useState([]);
  const [searchMoviesResult, setSearchMoviesResult] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [moviesSearchResponse, setMoviesSearchResponse] = useState("");
  const [savedMoviesSearchResponse, setSavedMoviesSearchResponse] = useState("");
  const [errorState, setErrorState] = useState(false);

  const history = useHistory();

  let location = useLocation().pathname;
  const [isSubmitted, setisSubmitted] = useState(false);

  const toggleSubmit = () => {
    setisSubmitted(true);
  }

  const unToggleSubmit = () => {
    setisSubmitted(false);
  }

  function tokenCheck() {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi.getUser(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);
            history.push(location);
          }
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("token");
          history.push("/");
        });
    }
  }

  function handleRegister({ name, email, password }) {
    mainApi.register(name, email, password)
          .then((res) => {
              if (res) {
                  handleLogin(email, password);

              }
          })
          .catch((err) => {
            console.log(err);
              if (err === "Error 400") {
                  showResMessage(messages.userIncorrectUpdateInfo);
              }
              if (err === "Error 409") {
                  showResMessage(messages.userIncorrectUpdateInfo);
              }
              if (err === "Error 500") {
                  showResMessage(messages.userIncorrectUpdateInfo);
              }
          });
  }

  function handleLogin(email, password) {
    mainApi.login(email, password)
          .then((res) => {
              if (res.token) {
                  localStorage.setItem("jwt", res.token);
                  setLoggedIn(true);
                  history.push("/movies");
              }
          })
          .catch((err) => {
            console.log(`Ошибка ${err}`)
              if (err === "Error 400") {
                showResMessage(messages.userIncorrectUpdateInfo);
              }
              if (err === "Error 401") {
                showResMessage(messages.userIncorrectUpdateInfo);
              }
              if (err === "Error 500") {
                showResMessage(messages.userIncorrectUpdateInfo);
              }
          });
  }

  function handleUpdateUser(name, email) {
    mainApi.editUserBio(name, email)
      .then(res => {
        setCurrentUser(res);
      })
    // .catch(err => console.log(err))
          .catch((err) => {
            console.log(err);
            if (err === "Error 400") {
              showResMessage(messages.userIncorrectUpdateInfo);
            }
            if (err === ("Error 409" || "Ошибка: 409")) {
              showResMessage(messages.userEmailConflict);
            }
          });
  }

  function handleLogOut() {
      localStorage.clear();
      setCurrentUser({});
      setLoggedIn(false);
      history.push("/");
  }

  function showResMessage(error) {
      setResponseMessage(error);
      setTimeout(() => setResponseMessage(""), 8000);
  }

  function getBeatMovies() {
    setIsLoading(true);
    moviesApi.getFilms()
        .then((data) => {
            const moviesArray = data.map((item) => {
                return {
                    country: item.country || 'none',
                    director: item.director,
                    duration: item.duration,
                    year: item.year,
                    description: item.description,
                    image: `https://api.nomoreparties.co${item.image.url}` || '',
                    trailer: item.trailerLink,
                    thumbnail: `https://api.nomoreparties.co${item.image.formats.thumbnail.url}` || '',
                    movieId: item.id,
                    nameRU: item.nameRU,
                    nameEN: item.nameEN || item.nameRU,
                };
            });
            localStorage.setItem("movies", JSON.stringify(moviesArray));
        })
        .catch((err) => {
            setMoviesSearchResponse(messages.moviesServerError);
            console.log(err);
        })
        .finally(() => {
            setIsLoading(false);
        });
}

function getFavoriteMovies() {
    mainApi.getUserMovies()
        .then((favouriteMovies) => {
            setSavedMovies(favouriteMovies);
        })
        .catch((error) => {
            setMoviesSearchResponse(messages.moviesServerError);
            console.log(error);
        });
}

function search(data, keyword) {
    const result = data.filter((movie) => {
        return (
            movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(keyword.toLowerCase()) ||
            movie.description.toLowerCase().includes(keyword.toLowerCase())
        );
    });
    if (result.length === 0 && location === "/movies") {
        setMoviesSearchResponse(messages.movieServerNothingFound);
    }
    if (result.length === 0 && location === "/saved-movies") {
        setSavedMoviesSearchResponse(messages.movieNotSaved);
    }
    return result;
}

function sortShortMovies(movies) {
    const shortMoviesArray = movies.filter(
        (movie) => movie.duration <= 40
    );
    return shortMoviesArray;
}

function submitSearch(keyword) {
    getBeatMovies();
    setTimeout(() => setIsLoading(false), 1000);
    setSearchMoviesResult(search(allMovies, keyword));
    localStorage.setItem("searchResult", JSON.stringify(search(allMovies, keyword)));
}

function submitFavoriteSearch(keyword) {
    setTimeout(() => setIsLoading(false), 2000);
    setSavedMovies(search(savedMovies, keyword));
}

function addMovie(movie) {
    mainApi.createMovie(movie)
        .then((res) => {
            const newSavedMovie = res;
            setSavedMovies([...savedMovies, newSavedMovie]);
            console.log(`addMovie ${res.message}`);
        })
        setErrorState(true)
        .catch((err) => console.log(err));
}

function removeMovies(movie) {
    const movieId = savedMovies.find(
        (item) => item.movieId === movie.movieId
    )._id;
    mainApi.deleteMovie(movieId)
        .then((res) => {
            getFavoriteMovies();
            console.log(res.message);
        })
        .catch((err) => console.log(err));
}

function checkLikeStatus(movie) {
  return savedMovies.some(savedMovie => savedMovie.movieId === movie.movieId);
}

function toggleMovieLike(movie, isLiked) {
    isLiked ? removeMovies(movie) : addMovie(movie);
}

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      return;
    } else {
      Promise.all([mainApi.getUser(token), getFavoriteMovies()])
        .then(([userData, favoriteMovieData]) => {
          setCurrentUser({
            ...currentUser,
            name: userData.name,
            email: userData.email,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("movies"));
    if (movies) {
      setAllmovies(movies);
      const searchResult = JSON.parse(
        localStorage.getItem("searchResult")
      );
      if (searchResult) {
        setSearchMoviesResult(searchResult);
      }
    } else {
        getBeatMovies();
    }
  }, [loggedIn]);

  useEffect(() => {
      tokenCheck();
  }, []);


  return (
    <>
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Route
          exact
          path={['/', '/users/me', '/saved-movies', '/movies']}
        >
          <Header loggedIn={loggedIn}/>
        </Route>

        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn}/>
          </Route>

          <Route path="/signup">
            {loggedIn ? <Redirect to="/" /> :
              <Register
              onRegister={handleRegister}
              responseMessage={responseMessage}
              />
            }
          </Route>

          <Route exact path="/signin">
            {loggedIn ? <Redirect to="/" /> :
              <Login
              onLogin={handleLogin}
              responseMessage={responseMessage}
              isLoading={isLoading}
              />
            }
          </Route>

          <ProtectedRoute
            exact
            path={"/users/me"}
            loggedIn={loggedIn}
            component={Profile}
            userData={currentUser}
            responseMessage={responseMessage}
            onEditProfile={handleUpdateUser}
            onLogOut={handleLogOut}
            isLoading={isLoading}
          />

          <ProtectedRoute
            exact
            path={"/movies"}
            component={Movies}
            loggedIn={loggedIn}
            isLoading={isLoading}
            onSubmitSearch={submitSearch}
            sortShortMovies={sortShortMovies}
            setPreloader={setIsLoading}
            moviesSearchResponse={moviesSearchResponse}
            movies={searchMoviesResult}
            toggleMovieLike={toggleMovieLike}
            checkLikeStatus={checkLikeStatus}
            toggleSubmit={toggleSubmit}
            isSubmitted={isSubmitted}
            unToggleSubmit={unToggleSubmit}
            errorState={errorState}
          />

          <ProtectedRoute
            exact
            path={"/saved-movies"}
            component={SavedMovies}
            loggedIn={loggedIn}
            isLoading={isLoading}
            onSubmitSearch={submitFavoriteSearch}
            sortShortMovies={sortShortMovies}
            setPreloader={setIsLoading}
            moviesSearchResponse={savedMoviesSearchResponse}
            movies={savedMovies}
            toggleMovieLike={toggleMovieLike}
            checkLikeStatus={checkLikeStatus}
            toggleSubmit={toggleSubmit}
            isSubmitted={isSubmitted}
            unToggleSubmit={unToggleSubmit}
          />

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

        <Footer />
      </div>
    </CurrentUserContext.Provider>
    </>
  );
};

export default App;
