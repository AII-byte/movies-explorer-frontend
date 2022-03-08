import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard'
import MoreMovies from '../MoreMovies/MoreMovies'

function MoviesCardList() {
  return(
    <ul className="movies-card-list">
      <MoviesCard />
      <MoreMovies />
    </ul>
  )
}

export default MoviesCardList;
