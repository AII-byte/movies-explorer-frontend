import Header from '../../Header/Header';
import SearchForm from '../SearchForm/SearchForm'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import Footer from '../../Footer/Footer';

import poster from '../../../images/poster.jpg'

function SavedMovies() {
  return(
    <>
    <Header />
    <SearchForm />
    <FilterCheckbox />
    <ul className="movies-card-list">
    <li className="movies-card">
      <div className="movies-card__footer">
        <div className="movies-card__info">
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <p className="movies-card__lenght">1ч 42м</p>
        </div>
        <button type="button" className="movies-card__delete"></button>
      </div>
      <img src={poster} alt="Постер фильма" className="movies-card__image" />
    </li>
    <li className="movies-card">
      <div className="movies-card__footer">
        <div className="movies-card__info">
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <p className="movies-card__lenght">1ч 42м</p>
        </div>
        <button type="button" className="movies-card__delete"></button>
      </div>
      <img src={poster} alt="Постер фильма" className="movies-card__image" />
    </li>
    <li className="movies-card">
      <div className="movies-card__footer">
        <div className="movies-card__info">
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <p className="movies-card__lenght">1ч 42м</p>
        </div>
        <button type="button" className="movies-card__delete"></button>
      </div>
      <img src={poster} alt="Постер фильма" className="movies-card__image" />
    </li>
    </ul>
    <Footer />
    </>
  )
}

export default SavedMovies;
