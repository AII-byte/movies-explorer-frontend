import React from "react"
import { useEffect, useState } from 'react';
import { useLocation, NavLink }  from 'react-router-dom';
import account_logo from '../../images/account__icon.svg'

function Navigation() {
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
        <NavLink to="/" className="navigation__link" style={{ color: textColor }}>
          Главная
        </NavLink>
      </li>
      <li className="navigation__list-item">
        <NavLink to="/movies" className="navigation__link" style={{ color: textColor }}>
          Фильмы
        </NavLink>
      </li>
      <li className="navigation__list-item">
        <NavLink to="/saved-movies" className="navigation__link modal__link_active" style={{ color: textColor }}>
          Сохранённые фильмы
        </NavLink>
      </li>
      <li className="navigation__list-item">
        <NavLink to="/me" className="navigation__link_account" style={{ color: textColor }}>
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
