class Api {
  constructor({baseUrl, header}){
    this._baseUrl = baseUrl;
    this._header = header;
  }

  getData() {
    return Promise.all([this.getUserData(), this.getMovies()])
  }

  getUserData() {
    return fetch (`${this._baseUrl}/me`, {
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

  editUserBio({name: newName, about: newAbout}){
    return fetch (`${this._baseUrl}/me`, {
      method: 'PATCH',
      headers: this._header,
      credentials:'include',
      body: JSON.stringify({
        name: newName,
        about: newAbout
      })
    })
    .then(res => this._getResponseData(res))
  }

  addNewCard({name: newName, link: newLink}) {
    return fetch (`${this._baseUrl}/cards`, {
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

  changeLikeCardStatus(cardId, isLiked){
    if (isLiked) {
      return fetch (`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'DELETE',
        header: this._header,
        credentials:'include'
      })
      .then(res => this._getResponseData(res))
    } else {
      return fetch (`${this._baseUrl}/cards/${cardId}/likes`, {
        method: 'PUT',
        header: this._header,
        credentials:'include'
      })
      .then(res => this._getResponseData(res))
    }
  }

  deleteCard(cardId){
    return fetch (`${this._baseUrl}/cards/${cardId}`, {
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
  baseUrl: 'https://api.aii.nomoredomains.work',
  header: {
    'Content-Type': 'application/json'
  }
});

export default api;
