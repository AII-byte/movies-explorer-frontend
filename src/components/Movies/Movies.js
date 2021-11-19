import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import MoviesCardList from './MoviesCardList/MoviesCardList'

function Movies() {
  return (
    <div className="main section">
      <Header />
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList />
      <Footer />
    </div>
  );
}

export default Movies;
