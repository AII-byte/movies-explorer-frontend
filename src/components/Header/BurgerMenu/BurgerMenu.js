import React from "react"
import { useLocation }  from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Navigation from "../../Navigation/Navigation";

function BurgerMenu() {
  const location = useLocation();
  const [color, setColor] = useState('');

  const checkboxRef = useRef();

  const closeMenu = () => {
    checkboxRef.current.checked = false;
  };

  useEffect(() => {
    if (location.pathname === '/') {
        setColor('#FFFFFF');
    } else {
        setColor('#000000');
    }
}, [location.pathname, color]);

  return (
    <nav className="burger">
      <input className="burger__btn" type="checkbox" id="burger-btn" ref={checkboxRef}/>
      <label className="burger__container" htmlFor="burger-btn">
        <span className="burger__icon" style={{ backgroundColor: color }}></span>
      </label>
      <Navigation
        onClose={closeMenu}
      />
    </nav>
  );
}

export default BurgerMenu;
