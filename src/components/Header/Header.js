import React from "react"
import { useLocation, Link }  from 'react-router-dom';
import { useState, useEffect } from 'react';
import header__logo from '../../images/header__logo.svg'
import BurgerMenu from '../Header/BurgerMenu/BurgerMenu'

function Header({loggedIn, email, handleSignOut}){
  const { pathname } = useLocation();
  // const text = `${pathname === '/sign-in' ? 'Регистрация' : 'Войти'}`;
  // const linkRoute = `${pathname === '/sign-in' ? '/sign-up' : '/sign-in'}`;
  const location = useLocation();
  const [color, setColor] = useState('');
  const [textColor, setTextColor] = useState('');

  useEffect(() => {
    if (location.pathname === '/') {
        setColor('#073042');
        setTextColor('#FFFFFF');
    } else {
        setColor('#FFFFFF');
    }
}, [location.pathname, color]);

  return(
    <header className="header" style={{ backgroundColor: color }}>
      <Link to="/">
        <img
          className="header__logo"
          alt="Логотип"
          src={header__logo}
        />
      </Link>
      {/* <nav className="header__button">
        <button className="button header__button_register">
          <Link
              to="/signup"
              style={{ color: textColor }}
              className="header__button-text header__button-text_color button "
          >
          Регистрация
          </Link>
        </button>
        <button className="button header__button_login header__button-text">
          <Link
              to="/signin"
              className="header__button_login header__button-text"
          >
          Войти
          </Link>
        </button>
      </nav> */}
      <BurgerMenu />
    </header>
  )
}

export default Header
