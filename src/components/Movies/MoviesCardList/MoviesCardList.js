import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({ movies, toggleMovieLike, checkLikeStatus }) {

  const [amountToRender, renderExtraPortion] = useState(0);
  const [moreAmountToRender, setMoreAmountToRender] = useState(0);
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);

  const location = window.location.pathname;

  let resizeTimeout = null;

  const updateWindowWidth = () => {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }

    resizeTimeout = setTimeout(() => setWindowWidth(document.documentElement.clientWidth), 2000);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  });

  useEffect(() => {
    if (location === '/movies') {
      if (windowWidth <= 760) {
        renderExtraPortion(5);
        setMoreAmountToRender(5);
      } else if (windowWidth > 760){
        renderExtraPortion(8);
        setMoreAmountToRender(8);
      }
    } else {
      renderExtraPortion(movies.length);
      console.log(movies.length)
    }
  }, [windowWidth, location, movies.length]);

  function handleMoreCards() {
      renderExtraPortion(amountToRender + moreAmountToRender);
  }

  return (
    <>
      <ul className="movies-card-list">
        {movies.slice(0, amountToRender).map((movie) => {
          return <MoviesCard
                    key={movie.movieId}
                    movie={movie}
                    onLikeClick={toggleMovieLike}
                    checkLikeStatus={checkLikeStatus}
                  />
        })}
      </ul>
      {movies.length > amountToRender &&
        <div className="more-movies">
          <button className="button more-movies more-movies__button" aria-label="more movies" onClick={handleMoreCards}>Ещё</button>
        </div>
      }
    </>
  )
}

export default MoviesCardList;
