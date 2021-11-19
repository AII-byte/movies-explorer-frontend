import logo from '../../../images/landing__logo.svg';

function Promo() {
return (
  <section className="promo">
    <img
      className="promo__logo"
      alt="лого практикума"
      src={logo}
    />
    <div className="promo__info">
      <h1 className="promo__header">Учебный проект студента факультета Веб&#8209;разработки.</h1>
      <h2 className="promo__sub-header">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h2>
      <button className="button promo__button promo__button-text"><a href='https://practicum.yandex.ru/web/' target="blank" className="promo__link">Узнать больше</a></button>
    </div>

  </section>
);
}

export default Promo;

