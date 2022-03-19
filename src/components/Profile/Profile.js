import React, { useEffect, useState } from 'react';
import CurrentUserContext from '../../contexts/currentUserContext';
import useFormValidation from '../../utils/validation';

function Profile({loggedIn, responseMessage, onEditProfile, onLogOut, isLoading}) {

  const currentUser = React.useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange } = useFormValidation({ email: currentUser.email, name: currentUser.name });

  const [isValuesNotMatched, setisValuesNotMatched] = useState(false);

  function checkValues() {
      if (
          currentUser.email === values.email &&
          currentUser.name === values.name
      ) {
          setisValuesNotMatched(false);
      } else {
          setisValuesNotMatched(true);
      }
  }

  useEffect(() => {
      checkValues();
  }, [handleChange]);

  function handleOnSubmit(evt) {
      evt.preventDefault();
      onEditProfile(values);
  }

 return (
    <>
    <div className="profile section">
      <form
        className="form section profile__form"
        id="profile__form"
        autoComplete="on"
        noValidate
        onSubmit={handleOnSubmit}
      >
        <fieldset className="profile__field">
          <legend className="profile__header">{`Привет, ${currentUser.name}!`}</legend>
          <div className="profile__input-line">
            <label className="profile__input-label">Имя</label>
            <input
              className="profile__input"
              type="text"
              name="name"
              autoComplete="off"
              minLength={2}
              maxLength={30}
              value={values.name || ""}
              onChange={handleChange}
              required
            />
          </div>
          <span className="section error error__input" id="user-name-error">{errors.name || ''}</span>
          <div className="profile__input-line">
            <label className="profile__input-label">E-mail</label>
            <input
              className="profile__input"
              type="email"
              name="email"
              autoComplete="off"
              required
              onChange={handleChange}
              value={values.email || ""}
              pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b"
            />
          </div>
          <span className="section error error__input" id="user-name-error">{errors.email || ''}</span>
        </fieldset>
        <span className="section error error__form">{responseMessage}</span>
        <div className="form__buttons">
          <button
            type="submit"
            form="profile__form"
            className={`button button__profile profile__edit-btn ${
              isValid && isValuesNotMatched && !isLoading
              ? ''
              : 'profile__edit-btn_disable'
            }`}
            onClick={handleOnSubmit}
            disabled={!isValid && !isValuesNotMatched && !isLoading}
          >
          {isLoading ? 'Сохранение....' : 'Редактировать'}
          </button>
          <button
            type="button"
            className="button button__profile profile__logout-btn"
            onClick={onLogOut}
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </div>
    </>
);
}

export default Profile;
