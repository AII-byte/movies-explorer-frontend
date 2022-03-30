import React from "react"
import { useLocation, Link }  from 'react-router-dom';
import { useState, useEffect } from 'react';
import header__logo from '../../images/header__logo.svg'
import RegLogMenu from "./RegLogMenu/RegLogMenu";
import BurgerMenu from './BurgerMenu/BurgerMenu'

function Header({ loggedIn }){
  const location = useLocation();
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
      {loggedIn ? (
        <BurgerMenu />
      ) : (
        <RegLogMenu />
      )}
    </header>
  )
}

export default Header
