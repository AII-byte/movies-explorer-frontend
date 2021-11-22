import React from "react"
import { useLocation }  from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from "../../Navigation/Navigation";

function BurgerMenu() {
  const location = useLocation();
  const [color, setColor] = useState('');

  useEffect(() => {
    if (location.pathname === '/') {
        setColor('#FFFFFF');
    } else {
        setColor('#000000');
    }
}, [location.pathname, color]);

  return (
    <nav className="burger">
      <input className="burger__btn" type="checkbox" id="burger-btn"/>
      <label className="burger__container" htmlFor="burger-btn"><span className="burger__icon" style={{ backgroundColor: color }}></span></label>
      <Navigation />
    </nav>
  );
}

export default BurgerMenu;
