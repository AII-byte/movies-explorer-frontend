import React, { useEffect, useState } from 'react';
import '../../../blocks/button/button.css';
import './SearchForm.css';
import searchIcon_2 from '../../../images/searchIcon_2.svg';
import searchIcon from '../../../images/searchIcon.svg';
import useFormValidation from '../../../utils/validation';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ handleSearch, setPreloader, setIsChecked, isLoading, toggleSubmit, isSubmitted, unToggleSubmit }) {

  const location = window.location.pathname;
  const { values, handleChange } =  useFormValidation({});

  const [keyword, setKeyword] = useState(values.keyword);
  const [isShortMovies, setIsShortMovies] = useState(false);


function onCheckboxToggle(checked) {
  setIsShortMovies(checked);
  setIsChecked(!isShortMovies);
}

function handleKeyword(evt) {
  handleChange(evt);
  setKeyword(evt.target.value);
}

  function handleSubmit(event) {
    event.preventDefault();
    if (keyword === "") {
        console.log(keyword)
        toggleSubmit()
      } else {
        handleSearch(keyword);
        setPreloader(true);
        unToggleSubmit()
    }
  }

  // const searchRequestText = localStorage.getItem('searchRequest')? JSON.parse(localStorage.getItem('searchRequest')) : [];

  useEffect(() => {
    if(location==="/movies") {
      // setKeyword(localStorage.getItem('searchRequest')? JSON.parse(localStorage.getItem('searchRequest')) : [])
      // setKeyword(localStorage.getItem('searchRequest'))
      setKeyword(keyword)
    }
  }, [keyword])

  return (
    <>
    <form className="search-form" id="search-form" autoComplete="off" onSubmit={handleSubmit}>
      <img src={searchIcon_2} alt="Иконка поисковой строки" className="search-form__icon" />
      <input
        className="search-form__input"
        type="search"
        placeholder="Фильм"
        name="keyword"
        defaultValue={values.keyword}
        onChange={handleKeyword}
        autoComplete="off"
        maxLength="300"
        required
        disabled={isLoading}
      />
      <button type="submit" form="search-form" className="button search-form__button">
        <img src={searchIcon} alt="Иконка кнопки поиска" className="search-form__button-icon" />
      </button>
    </form>
    <FilterCheckbox onCheckboxToggle={onCheckboxToggle}/>
    </>
  );
};

export default SearchForm;
