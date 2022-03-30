import React, { useState, useEffect } from 'react';

function FilterCheckbox({ onCheckboxToggle }) {

  const [isChecked, setChecked] = useState(false);
  const location = window.location.pathname;

  function onChange(event) {
      onCheckboxToggle(!isChecked);
      setChecked(event.target.checked);
      localStorage.setItem('durationStatus', JSON.stringify(!isChecked));
  }

  useEffect(() => {
    if(location==="/movies" && localStorage.getItem("durationStatus")) {
      setChecked(JSON.parse(localStorage.getItem("durationStatus")))
    }
  }, [location])

  return(
    <div className="filter-checkbox">
      <label className="switch">
        <input
          type="checkbox"
          className="checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
          checked={isChecked}
          onChange={(e) => onChange(e)}
        />
        <span className="slider"></span>
      </label>
      <span className="filter-checkbox__text">Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;
