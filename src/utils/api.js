class Api {
  constructor({baseUrl, header}){
    this._baseUrl = baseUrl;
    this._header = header;
  }

  getData() {
    return Promise.all([this.getUserData(), this.getMovies()])
  }

  getUserData() {
    return fetch (`${this._baseUrl}/profile`, {
      method:'GET',
      headers: this._header,
      credentials:'include',
   })
    .then(res => this._getResponseData(res))
  }

  getMovies() {
    return fetch (`${this._baseUrl}/movies`, {
      method:'GET',
      headers: this._header,
      credentials:'include'
    })
    .then(res => this._getResponseData(res))
  }

  editUserBio({name: newName, email: newEmail}){
    return fetch (`${this._baseUrl}/profile`, {
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

  addNewCard({name: newName, link: newLink}) {
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

  deleteCard(movieId){
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

const api = new Api({
  baseUrl: 'http://localhost:3001',
  header: {
    'Content-Type': 'application/json'
  }
});

export default api;
