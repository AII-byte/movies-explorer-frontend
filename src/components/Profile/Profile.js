import Header from '../Header/Header';

function Profile() {
  return (
    <>
    <Header />
    <div className="profile section">
      <form className="form section profile__form">
        <fieldset className="profile__field">
          <legend className="profile__header">Привет, Виталий!</legend>
          <div className="profile__input-line">
            <label className="profile__input-label">Имя</label>
            <input className="profile__input" type="text" autoComplete="off" required></input>
          </div>
          <div className="profile__input-line">
            <label className="profile__input-label">E-mail</label>
            <input className="profile__input" type="email" autoComplete="off" required></input>
          </div>
        </fieldset>
        <div className="form__buttons">
          <button className="button button__profile profile__login-btn">Редактировать</button>
          <button className="button button__profile profile__logout-btn">Выйти из аккаунта</button>
        </div>
      </form>
    </div>
    </>
  );
}

export default Profile;
