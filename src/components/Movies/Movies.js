import React from 'react'
import SearchForm from './SearchForm/SearchForm';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import MoviesCardList from './MoviesCardList/MoviesCardList'

function Movies() {

  return (
    <div className="main section">
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList />
    </div>
  );
}

export default Movies;
