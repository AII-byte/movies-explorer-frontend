import profilePhoto from '../../../images/profilePhoto.jpg'

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="main__header">Студент</h2>
      <div className="about-me__container">
        <img src={profilePhoto} alt="Фоточка студента" className="about-me__photo" />
        <div className="about-me__info">
          <h2 className="about-me__title">Виталий</h2>
          <p className="about-me__author">Фронтенд&#8209;разработчик, 30 лет</p>
          <blockquote className="about-me__quote">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб&#8209;разработке, начал заниматься фриланс&#8209;заказами и ушёл с постоянной работы.</blockquote>
          <ul className="table table__about-me">
            <li className="table__about-me-cell"><a href='https://www.facebook.com/' target="blank" className="about-me__link">Facebook</a></li>
            <li className="table__about-me-cell"><a href='https://github.com/' target="blank" className="about-me__link">Github</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
  }

  export default AboutMe;
