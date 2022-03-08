import React  from 'react';
import { useContext, useState } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({onUpdateUser, logout}) {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();

  const currentUser = useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleNameInputChange(e) {
    setName(e.target.value);
  }

  function handleEmailInputChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      email: email,
    });
  }

 return (
    <>
    <div className="profile section">
      <form className="form section profile__form" id="profile__form" autoComplete="on">
        <fieldset className="profile__field">
          <legend className="profile__header">{`Привет, ${currentUser.name}!`}</legend>
          <div className="profile__input-line">
            <label className="profile__input-label">Имя</label>
            <input
              className="profile__input"
              type="text"
              autoComplete="off"
              required
              onChange={handleNameInputChange}
              value={currentUser.name || ''}
            />
          </div>
          <div className="profile__input-line">
            <label className="profile__input-label">E-mail</label>
            <input
              className="profile__input"
              type="email"
              autoComplete="off"
              required
              onChange={handleEmailInputChange}
              value={currentUser.email || ''}
            />
          </div>
        </fieldset>
        <div className="form__buttons">
          <button
            type="submit"
            form="profile__form"
            className="button button__profile profile__login-btn"
            onClick={handleSubmit}
          >
            Редактировать
          </button>
          <button
            type="button"
            className="button button__profile profile__logout-btn"
            onClick={() => logout()}
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
