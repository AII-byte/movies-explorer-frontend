import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__header">Учебный проект Яндекс&#46;Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <ul className="footer__links">
          <li className="footer__cell">
            <a href='https://practicum.yandex.ru/' target="blank" className="footer__link">Яндекс&#46;Практикум</a>
          </li>
          <li className="footer__cell">
            <a href='https://github.com/' target="blank" className="footer__link">Github</a>
          </li>
          <li className="footer__cell">
            <a href='https://www.facebook.com/' target="blank" className="footer__link">Facebook</a>
          </li>
        </ul>
        <p className="footer__year">&copy;{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
  }

  export default Footer;
