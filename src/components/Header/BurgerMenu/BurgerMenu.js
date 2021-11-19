import React from "react"
import { NavLink }  from 'react-router-dom';
import Navigation from "../../Navigation/Navigation";

function BurgerMenu() {
  return (
    <NavLink className="burger">
      <input className="burger__btn" type="checkbox" id="burger-btn"/>
      <label className="burger__container" htmlFor="burger-btn"><span className="burger__icon"></span></label>
      <Navigation />
    </NavLink>
  );
}

export default BurgerMenu;
