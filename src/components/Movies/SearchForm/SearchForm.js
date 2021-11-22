import '../../../blocks/button/button.css'
import './SearchForm.css';
import searchIcon_2 from '../../../images/searchIcon_2.svg'
import searchIcon from '../../../images/searchIcon.svg'

function SearchForm() {
  return (
    <form className="search-form" id="search-form" autoComplete="off">
      <img src={searchIcon_2} alt="Иконка поисковой строки" className="search-form__icon" />
      <input type="search" placeholder="Фильм" name="film" className="search-form__input" />
      <button type="submit" form="search-form" className="button search-form__button">
        <img src={searchIcon} alt="Иконка кнопки поиска" className="search-form__button-icon" />
      </button>
    </form>
  );
};

export default SearchForm;
