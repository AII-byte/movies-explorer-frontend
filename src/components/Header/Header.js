import React from "react"
import { useLocation, Link }  from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import header__logo from '../../images/header__logo.svg'
import RegLogMenu from "./RegLogMenu/RegLogMenu";
import BurgerMenu from './BurgerMenu/BurgerMenu'
import CurrentUserContext from '../../contexts/CurrentUserContext'

function Header(){
  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);
  const [color, setColor] = useState('');

  useEffect(() => {
    if (location.pathname === '/') {
      setColor('#073042');
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
      {currentUser ? (
        <BurgerMenu />
      ) : (
        <RegLogMenu />
      )}
    </header>
  )
}

export default Header
