import React from "react"
import { Link}  from 'react-router-dom';
import account_logo from '../../images/account__icon.svg'

function Navigation() {
  return (
    <div className="navigation">
    <ul className="navigation__list">
      <li className="navigation__list-item">
        <Link to="/" className="navigation__link">
          Главная
        </Link>
      </li>
      <li className="navigation__list-item">
        <Link to="/movies" className="navigation__link">
          Фильмы
        </Link>
      </li>
      <li className="navigation__list-item">
        <Link to="/saved-movies" className="navigation__link modal__link_active">
          Сохранённые фильмы
        </Link>
      </li>
      <li className="navigation__list-item">
        <Link to="/me" className="navigation__link_account">
          Аккаунт
          <img
            className="navigation__account"
            src={account_logo}
            alt="иконка профиля"
          />
        </Link>
      </li>
      </ul>
      </div>
  );

}

export default Navigation;
