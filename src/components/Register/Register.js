import React from 'react';
import { Link }  from 'react-router-dom';
import register__logo from '../../images/header__logo.svg'

function Register({registration}) {
  const [valueEmail, setValueEmail] = React.useState('');
  const [valuePassword, setValuePassword] = React.useState('');
  const [valueUserName, setValueUserName] = React.useState('');

  function handlUserNameChange(e) {
    setValueUserName(e.target.value);
  }

  function handleEmailChange(e) {
    setValueEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setValuePassword(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault()
    const name = valueUserName;
    const email = valueEmail;
    const password = valuePassword;
    registration(name, email, password)
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
          <input className="form__input form__user-name" type="text" value={valueUserName} autoComplete="off" required onChange={handlUserNameChange}></input>
          <span className="error section" id="user-name-error">и тут</span>

          <label className="form__label form__label-style">E-mail</label>
          <input className="form__input form__user-email" type="email" value={valueEmail} autoComplete="off" required onChange={handleEmailChange}></input>
          <span className="error section" id="user-email-error">и тут</span>

          <label className="form__label form__label-style">Пароль</label>
          <input className="form__input form__user-password" type="password" value={valuePassword} autoComplete="off" required onChange={handlePasswordChange}></input>
          <span className="error section" id="user-password-error">и вот здесь</span>

        </fieldset>
        <div className="form__buttons">
          <button className="button button__register button__text">Зарегистрироваться</button>
          <span className="button__register register__text">Уже зарегистрированы?&nbsp;
            <Link to="/signin" className="button__link">Войти</Link></span>
        </div>
      </form>
    </div>
  );
}

export default Register;
