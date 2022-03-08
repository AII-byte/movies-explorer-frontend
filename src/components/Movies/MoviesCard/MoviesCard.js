import React from "react";

function MoviesCard({card}) {
  return(
    <>
    <li className="movies-card">
      <div className="movies-card__footer">
        <div className="movies-card__info">
          <h2 className="movies-card__title">{card}</h2>
          <p className="movies-card__lenght">1h 25m</p>
        </div>
        <button type="button" className="movies-card__like"></button>
      </div>
      <img src={`https://api.nomoreparties.co${card}`} alt={`Постер фильма ${card}`} className="movies-card__image" />
    </li>
    </>
  )
}

export default MoviesCard;
