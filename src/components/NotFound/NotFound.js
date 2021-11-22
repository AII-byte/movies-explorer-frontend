import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory();

  return (
    <section className="not-found">
      <h2 className="not-found__header">404</h2>
      <p className="not-found__text">Страница не найдена</p>
      <div className="not-found__btn-back-container">
        <button className="button not-found__btn-back" onClick={history.goBack}>Назад</button>
      </div>
    </section>
  );
}

export default NotFound;
