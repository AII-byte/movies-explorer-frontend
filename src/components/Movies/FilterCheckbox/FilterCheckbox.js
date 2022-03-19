import React, { useState } from 'react';

function FilterCheckbox({ onCheckboxToggle }) {

  const [isChecked, setChecked] = useState(false);

  function onChange(event) {
      onCheckboxToggle(!isChecked);
      setChecked(event.target.checked);
  }

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
