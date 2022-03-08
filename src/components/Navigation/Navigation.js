import React from "react"
import { useEffect, useState } from 'react';
import { useLocation, NavLink }  from 'react-router-dom';
import account_logo from '../../images/account__icon.svg'

function Navigation({onClose}) {
  const location = useLocation();
  const [color, setColor] = useState('');
  const [textColor, setTextColor] = useState('');

  useEffect(() => {
    if (location.pathname === '/') {
        setColor('#073042');
        setTextColor('#FFFFFF');
    } else {
        setColor('#FFFFFF');
        setTextColor('#000000');
    }
}, [location.pathname, color]);

  return (
    <div className="navigation">
    <ul className="navigation__list" style={{ backgroundColor: color }}>
      <li className="navigation__list-item" >
        <NavLink
          exact
          to="/"
          className="navigation__link"
          activeClassName="navigation__link_active"
          style={{ color: textColor }}
          onClick={onClose}
        >
          Главная
        </NavLink>
      </li>
      <li className="navigation__list-item">
        <NavLink
          to="/movies"
          className="navigation__link"
          activeClassName="navigation__link_active"
          style={{ color: textColor }}
          onClick={onClose}
        >
          Фильмы
        </NavLink>
      </li>
      <li className="navigation__list-item">
        <NavLink
          to="/saved-movies"
          className="navigation__link modal__link_active"
          activeClassName="navigation__link_active"
          style={{ color: textColor }}
          onClick={onClose}
        >
          Сохранённые фильмы
        </NavLink>
      </li>
      <li className="navigation__list-item">
        <NavLink
          to="/users/me"
          className="navigation__link_account"
          activeClassName="navigation__link_active"
          style={{ color: textColor }}
          onClick={onClose}
        >
          Аккаунт
          <img
            className="navigation__account"
            src={account_logo}
            alt="иконка профиля"
          />
        </NavLink>
      </li>
    </ul>
    </div>
  );

}

export default Navigation;
