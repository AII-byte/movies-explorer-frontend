function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__heading">Портфолио</h3>
      <ul className="table portfolio__u-list">
        <li className="table__portfolio-cell">
          <a href='https://habr.com/ru/post/453656/' target="blank" className="table__portfolio-link">
            <h3 className="table__portfolio-list">Статичный сайт</h3>
            <p className="table__portfolio-list table__portfolio-list_transform">&#8593;</p>
          </a>
        </li>
        <li className="table__portfolio-cell">
          <a href='https://tproger.ru/translations/responsive-web-design-tips/' target="blank" className="table__portfolio-link">
            <h3 className="table__portfolio-list">Адаптивный сайт</h3>
            <p className="table__portfolio-list table__portfolio-list_transform">&#8593;</p>
          </a>
        </li>
        <li className="table__portfolio-cell">
          <a href='https://ru.wikipedia.org/wiki/%D0%9E%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5' target="blank" className="table__portfolio-link">
            <h3 className="table__portfolio-list">Одностраничное приложение</h3>
            <p className="table__portfolio-list table__portfolio-list_transform">&#8593;</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
