import React from "react";
import { Route, Switch } from 'react-router-dom';

function MoviesCard({ movie, onLikeClick, onMovieDelete, checkLikeStatus, onMovieSave, isSavedMovie, savedMovies }) {

  const isLiked = checkLikeStatus(movie);

  function handleLikeClick() {
      onLikeClick(movie, isLiked);
  }

  const convertTime = (min) => {
    return `${Math.floor(min/60)}ч ${min % 60}м`
  }

  return(
    <>
    <li className="movies-card">
      <div className="movies-card__footer">
        <div className="movies-card__info">
          <h2 className="movies-card__title">{movie.nameRU}</h2>
          <p className="movies-card__lenght">{convertTime(movie.duration)}</p>
        </div>
        <Switch>
          <Route path="/movies">
            <button
              type="button"
              className={`movies-card__like ${isLiked ? "movies-card__like_active" : " "}`}
              onClick={handleLikeClick}
            ></button>
          </Route>
          <Route path="/saved-movies">
            <button
              type="button"
              className="movies-card__delete"
              onClick={handleLikeClick}
            ></button>
          </Route>
        </Switch>
      </div>
      <a
        href={movie.trailer}
        target="_self"
        rel="noreferrer">
        <Switch>
          <Route path="/movies">
            <img
              className="movies-card__image"
              src={movie.image}
              alt={`Постер фильма ${movie.nameRU}`}
            />
          </Route>
          <Route path="/saved-movies">
            <img
              className="movies-card__image"
              src={movie.image}
              alt={`Постер фильма ${movie.nameRU}`}
            />
          </Route>
        </Switch>
      </a>
    </li>
    </>
  )
}

export default MoviesCard;
