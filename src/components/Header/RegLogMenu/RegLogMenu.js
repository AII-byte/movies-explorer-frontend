import React from "react"
import { useLocation, Link }  from 'react-router-dom';
import { useState, useEffect } from 'react';

function RegLogMenu() {
  const location = useLocation();
  const [color] = useState('');
  const [textColor, setTextColor] = useState('')

  useEffect(() => {
    if (location.pathname === '/') {
        setTextColor('#FFFFFF');
    } else {
        setTextColor('#000000');
    }
}, [location.pathname, color]);

  return(
    <nav className="header__button">
      <button className="button header__button_register">
        <Link
            to="/signup"
            style={{ color: textColor }}
            className="header__button-text header__button-text_color button "
        >
        Регистрация
        </Link>
      </button>
      <Link
          to="/signin"
          className="header__button_login header__button-text"
      >
      <button className="button header__button_login header__button-text">
        Войти
      </button>
      </Link>
    </nav>
  )
}

export default RegLogMenu;
