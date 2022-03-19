import React from 'react';
import useFormValidation from '../../utils/validation';
import { Link }  from 'react-router-dom';
import register__logo from '../../images/header__logo.svg'

function Register({ onRegister, responseMessage, isLoading }) {

  const { values, handleChange, errors, isValid, resetForm } = useFormValidation({});

  function handleSubmit(e){
    e.preventDefault();
    onRegister(values);
    resetForm();
  }

  return (
    <div className="register">
      <Link to="/">
        <img
          className="register__logo"
          alt="Логотип"
          src={register__logo}
        />
      </Link>
      <form className="form section form__register register__form" onSubmit={handleSubmit} autoComplete="on">
        <fieldset className="form__field">
          <legend className="form__header form__header-style">Добро пожаловать!</legend>
          <label className="form__label form__label-style">Имя</label>
          <input
            className="form__input form__user-name"
            type="text"
            id="name"
            name="name"
            value={values.name || ""}
            autoComplete="off"
            required
            onChange={handleChange}
            minLength={2}
            maxLength={30}
          />
          <span className="section error error__input" id="user-name-error">{errors.name || ''}</span>
          <label className="form__label form__label-style">E-mail</label>
          <input
            className="form__input form__user-email"
            type="email"
            id="email"
            name="email"
            value={values.email || ''}
            autoComplete="off"
            required
            onChange={handleChange}
            pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b"
          />
          <span className="section error error__input" id="user-email-error">{errors.email || ''}</span>
          <label className="form__label form__label-style">Пароль</label>
          <input
            className="form__input form__user-password"
            type="password"
            id="password"
            name="password"
            value={values.password || ''}
            autoComplete="off"
            required
            onChange={handleChange}
            minLength={8}
            />
          <span className="section error error__input" id="user-password-error">{errors.password || ''}</span>
        </fieldset>
        <span className="error section error__form">{responseMessage}</span>
        <div className="form__buttons">
          <button
            className={`button button__register button__text ${
              (!isValid || isLoading) &&
              'button__register_inactive'
            }`}
            type="submit"
            disabled={(!isValid || isLoading) && true}
          >
            {isLoading ? 'Регистрация....' : 'Зарегистрироваться'}
          </button>
          <span className="button__register register__text">Уже зарегистрированы?&nbsp;
            <Link to="/signin" className="button__link">Войти</Link></span>
        </div>
      </form>
    </div>
  );
}

export default Register;
