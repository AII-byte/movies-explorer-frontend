function NothingFound({ errorState, message}) {

  return(
    <p className="nothing-found">{`${
      errorState
        ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
        : message
    }`}</p>
  )
}

export default NothingFound
