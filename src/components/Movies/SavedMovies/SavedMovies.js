import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import NothingFound from '../../NothingFound/NothingFound';
import messages from '../../../utils/messages';

function SavedMovies({
  loggedIn,
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
 }) {
  const [shortMovies, setShortMovies] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
      if (isChecked) {
          setShortMovies(sortShortMovies(movies));
      }
  }, [isChecked]);


  return(
    <>

    <SearchForm
      handleSearch={onSubmitSearch}
      setPreloader={setPreloader}
      setIsChecked={setIsChecked}
      isLoading={isLoading}
      isSubmitted={isSubmitted}
      toggleSubmit={toggleSubmit}
      unToggleSubmit={unToggleSubmit}
    />
    {isChecked &&
    movies.length !== 0 &&
    shortMovies.length === 0 && (
      <NothingFound
        message={messages.movieNotShortFilm}
      />
    )}
    {!isSubmitted && movies.length === 0 ? (
      <NothingFound
        message={messages.movieNotSaved}
      />
      ): (
      ''
    )}
    {!movies || movies.length === 0 ? (
      <NothingFound
        message={messages.movieNotSaved}
      />
      ) : (
      <MoviesCardList
        movies={isChecked ? shortMovies : movies}
        toggleMovieLike={toggleMovieLike}
        checkLikeStatus={checkLikeStatus}
        isSavedPage={true}
      />
      )
      }
    </>
  )
}

export default SavedMovies;
