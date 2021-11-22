import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import api from '../../utils/api'
import CurrentUserContext from '../../contexts/CurrentUserContext'

import Main from '../Main/Main';
import Register from '../Register/Register';
import * as Auth from '../../utils/auth';
import Login from '../Login/Login';
import Movies from '../Movies/Movies'
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

function App() {

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/signin" component={Login} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/saved-movies" component={SavedMovies} />
            <Route exact path="/me" component={Profile} />
            <Route component={NotFound} />
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
