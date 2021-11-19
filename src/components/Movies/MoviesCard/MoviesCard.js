import poster from '../../../images/poster.jpg'

function MoviesCard() {
  return(
    <>
    <li className="movies-card">
      <div className="movies-card__footer">
        <div className="movies-card__info">
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <p className="movies-card__lenght">1ч 42м</p>
        </div>
        <button type="button" className="movies-card__like movies-card__like_active"></button>
      </div>
      <img src={poster} alt="Постер фильма" className="movies-card__image" />
    </li>
    <li className="movies-card">
      <div className="movies-card__footer">
        <div className="movies-card__info">
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <p className="movies-card__lenght">1ч 42м</p>
        </div>
        <button type="button" className="movies-card__like movies-card__like_active"></button>
      </div>
      <img src={poster} alt="Постер фильма" className="movies-card__image" />
    </li>
    <li className="movies-card">
      <div className="movies-card__footer">
        <div className="movies-card__info">
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <p className="movies-card__lenght">1ч 42м</p>
        </div>
        <button type="button" className="movies-card__like movies-card__like_active"></button>
      </div>
      <img src={poster} alt="Постер фильма" className="movies-card__image" />
    </li>
    </>
  )
}

export default MoviesCard;
