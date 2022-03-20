import React from 'react';
import { Link }  from 'react-router-dom';
import register__logo from '../../images/header__logo.svg';
import useFormValidation from '../../utils/validation';

function Login({ onLogin, responseMessage, isLoading }) {

  const { values, errors, isValid, handleChange } = useFormValidation({});

  function handleOnSubmit(evt) {
    evt.preventDefault();
    onLogin(values.email, values.password);
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
      <form className="form section form__login login__form" onSubmit={handleOnSubmit} autoComplete="on">
        <fieldset className="form__field">
          <legend className="form__header form__header-style">Рады видеть!</legend>
          <label className="form__label form__label-style" htmlFor="email">E-mail</label>
          <input
            className="form__input form__user-email"
            type="email"
            name="email"
            placeholder="email"
            value={values.email || ''}
            autoComplete="off"
            required
            onChange={handleChange}
            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b"
          />
          <span className="section error error__input error__email" id="user-email-error">{errors.email || ''}</span>

          <label className="form__label form__label-style" htmlFor="password">Пароль</label>
          <input
            className="form__input form__user-password"
            type="password"
            name="password"
            placeholder="Пароль"
            value={values.password || ''}
            autoComplete="off"
            required
            onChange={handleChange}
            minLength={5}
          />
          <span className="section error error__input" id="user-password-error">{errors.password || ''}</span>
          <span className="section error error__form">{responseMessage}</span>
        </fieldset>

        <div className="form__buttons">
          <button
            className={`button button__login button__text ${
              (!isValid) &&
              'button__register_inactive'
            }`}
            type="submit"
            disabled={(!isValid) && true}
          >
            {isLoading ? 'Вход....' : 'Войти'}
          </button>

          <span className="button__login login__text">Ещё не зарегистрированы?&nbsp;
            <Link to="/signup" className="button__link">Регистрация</Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
