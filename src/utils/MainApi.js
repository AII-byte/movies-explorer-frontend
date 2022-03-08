const checkRequestResult = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
}

class Api {
  constructor({baseUrl, header}){
    this._baseUrl = baseUrl;
    this._header = header;
  }

  getData() {
    return Promise.all([this.getUserData(), this.getMovies()])
  }

  register = (name, email, password) => {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      credentials:'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password })
    })
    .then(checkRequestResult)
  };

  login = (email, password) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      credentials:'include',
      headers: { 'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    })
    .then(checkRequestResult)
    .then((data) => data)
  }

  logout = () => {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this._checkResponse)
  }

  getContent = (token) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials:'include',
      headers: {
        'Content-Type': 'application/json',
      },
  })
    .then(checkRequestResult)
    .then((data) => data)
  }

  getUserData() {
    return fetch (`${this._baseUrl}/users/me`, {
      method:'GET',
      headers: this._header,
      credentials:'include',
   })
    .then(res => this._getResponseData(res))
  }

  editUserBio({name: newName, email: newEmail}){
    return fetch (`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._header,
      credentials:'include',
      body: JSON.stringify({
        name: newName,
        email: newEmail
      })
    })
    .then(res => this._getResponseData(res))
  }

  getSavedMovies() {
    return fetch (`${this._baseUrl}/movies`, {
      method:'GET',
      headers: this._header,
      credentials:'include'
    })
    .then(res => this._getResponseData(res))
  }

  addNewMovie({name: newName, link: newLink}) {
    return fetch (`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._header,
      credentials:'include',
      body: JSON.stringify({
        name: newName,
        link: newLink
      })
    })
    .then(res => this._getResponseData(res))
  }

  changeLikeMoviesStatus(movieId, isLiked){
    if (isLiked) {
      return fetch (`${this._baseUrl}/movies/${movieId}/likes`, {
        method: 'DELETE',
        header: this._header,
        credentials:'include'
      })
      .then(res => this._getResponseData(res))
    } else {
      return fetch (`${this._baseUrl}/movies/${movieId}/likes`, {
        method: 'PUT',
        header: this._header,
        credentials:'include'
      })
      .then(res => this._getResponseData(res))
    }
  }

  deleteMovie(movieId){
    return fetch (`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._header,
      credentials:'include'
    })
    .then(res => this._getResponseData(res))
  }

  _getResponseData(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Возникла ошибка: ${res.status}`);
    }
}

const MainApi = new Api({
  baseUrl: 'http://localhost:3001',
  header: {
    'Content-Type': 'application/json'
  }
});

export default MainApi;
