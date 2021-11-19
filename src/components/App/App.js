import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { useState, useEffect } from 'react';

import Main from '../Main/Main';
import Movies from '../Movies/Movies'
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/saved-movies" component={SavedMovies} />
          <Route exact path="/me" component={Profile} />
          <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
