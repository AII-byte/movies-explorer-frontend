import { Link }  from 'react-router-dom';
import register__logo from '../../images/header__logo.svg'

function Register() {
  return (
    <div className="register">
      <Link to="/">
        <img
          className="register__logo"
          alt="Логотип"
          src={register__logo}
        />
      </Link>
      <form className="form section form__register register__form">
        <fieldset className="form__field">
          <legend className="form__header form__header-style">Добро пожаловать!</legend>

          <label className="form__label form__label-style">Имя</label>
          <input className="form__input form__user-name" type="text" autoComplete="off" required></input>
          <span className="error section" id="user-name-error">и тут</span>

          <label className="form__label form__label-style">E-mail</label>
          <input className="form__input form__user-email" type="email" autoComplete="off" required></input>
          <span className="error section" id="user-email-error">и тут</span>

          <label className="form__label form__label-style">Пароль</label>
          <input className="form__input form__user-password" type="password" autoComplete="off" required></input>
          <span className="error section" id="user-password-error">и вот здесь</span>

        </fieldset>
        <div className="form__buttons">
          <button className="button button__register button__text">Зарегистрироваться</button>
          <span className="button__register register__text">Уже зарегистрированы?&nbsp;<Link to="/signin" className="button__link">Войти</Link></span>
        </div>
      </form>
    </div>
  );
}

export default Register;
