import React, { useEffect, useState } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList'
import Preloader from '../Preloader/Preloader';
import NothingFound from '../NothingFound/NothingFound';

import messages from '../../utils/messages';

function Movies({
  isLoading,
  onSubmitSearch,
  movies,
  setPreloader,
  moviesSearchResponse,
  toggleMovieLike,
  checkLikeStatus,
  sortShortMovies,
  toggleSubmit,
  isSubmitted,
  unToggleSubmit,
  handleMovieLike
}) {

    const [shortMovies, setShortMovies] = useState([]);
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
      if (isChecked) {
        setShortMovies(sortShortMovies(movies));
      }
    }, [isChecked]);

  return (
    <div className="main section">
      <SearchForm
        handleSearch={onSubmitSearch}
        setPreloader={setPreloader}
        setIsChecked={setIsChecked}
        isLoading={isLoading}
        isSubmitted={isSubmitted}
        toggleSubmit={toggleSubmit}
        unToggleSubmit={unToggleSubmit}
      />
      <div>
        {isLoading ?
          ( <Preloader /> ) :
          (
            <>
              {moviesSearchResponse
                ? movies.length === 0 && (
                  <NothingFound
                    message={messages.movieServerNothingFound}
                  />
                ) : ""
              }
              {isChecked &&
                movies.length !== 0 &&
                shortMovies.length === 0 && (
                  <NothingFound
                    message={messages.movieNotShortFilm}
                  />
              )}
              {movies.length !== 0 && (
                <MoviesCardList
                  movies={isChecked ? shortMovies : movies}
                  toggleMovieLike={toggleMovieLike}
                  checkLikeStatus={checkLikeStatus}
                />
              )}
            </>
          )
        }
      </div>
    </div>
  );
}

export default Movies;
