function FilterCheckbox() {
  return(
    <div className="filter-checkbox">
      <label className="switch">
        <input type="checkbox" className="checkbox"/>
        <span className="slider"></span>
      </label>
      <span className="filter-checkbox__text">Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;
