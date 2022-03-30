import React from "react";

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="main__header">О проекте</h2>
      <ul className="table table__about-project">
        <li className="table__about-project-list">
          <h3 className="table__heading">Дипломный проект включал 5 этапов</h3>
          <p className="table__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="table__about-project-list">
          <h3 className="table__heading">На выполнение диплома ушло 5 недель</h3>
          <p className="table__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="timeline">
        <div className="timeline__first">
          <p className="timeline__info timeline__info_choose">1 неделя</p>
          <span className="timeline__legend">Back-end</span>
        </div>
        <div className="timeline__second">
          <p className="timeline__info">4 недели</p>
          <span className="timeline__legend">Front-end</span>
        </div>
      </div>
    </section>
  );
  }

  export default AboutProject;
