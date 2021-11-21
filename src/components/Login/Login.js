import React from 'react';

import { Link }  from 'react-router-dom';
import register__logo from '../../images/header__logo.svg'

function Login({authorization}) {
  const [valueEmail, setValueEmail] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');

  function handleEmailChange(e) {
    setValueEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setValuePassword(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault()
    const email = valueEmail;
    const password = valuePassword;

    authorization(email, password);
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          alt="Логотип"
          src={register__logo}
        />
      </Link>
      <form className="form section form__login login__form" onSubmit={handleSubmit} autoComplete="on">
        <fieldset className="form__field">
          <legend className="form__header form__header-style">Рады видеть!</legend>

          <label className="form__label form__label-style">E-mail</label>
          <input className="form__input form__user-email" type="email" value={valueEmail} autoComplete="off" required onChange={handleEmailChange}></input>
          <span className="error section" id="user-email-error">и тут</span>

          <label className="form__label form__label-style">Пароль</label>
          <input className="form__input form__user-password" type="password" value={valuePassword} autoComplete="off" required onChange={handlePasswordChange}></input>
          <span className="error section" id="user-password-error">и вот здесь</span>

        </fieldset>
        <div className="form__buttons">
          <button className="button button__login button__text">Войти</button>
          <span className="button__login login__text">Ещё не зарегистрированы?&nbsp;
            <Link to="/signup" className="button__link">Регистрация</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
