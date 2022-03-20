class Api {
  constructor({baseUrl, header}){
    this._baseUrl = baseUrl;
    this._header = header;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`${res.status}`);
    }
    return res.json();
  }

  getData() {
    return Promise.all([this.getUserData(), this.getSavedMovies()])
  }

  register = (name, email, password) => {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      credentials:'include',
      headers: {
        Accept:'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password })
    })
    .then(res => this._getResponseData(res))
  };

  login = (email, password) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      credentials:'include',
      headers: {
        Accept:'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    })
    .then(res => this._getResponseData(res))
  }

  getUser = (token) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials:'include',
      headers: {
        Accept:'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => this._getResponseData(res))
  };

  editUserBio = ({ name: newName, email: newEmail }) => {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials:'include',
      headers: {
        Accept:'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email: newEmail, name: newName }),
    })
    .then(res => this._getResponseData(res))
  };

  createMovie = (data) => {
    const token = localStorage.getItem('jwt');
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      credentials:'include',
      headers: {
        Accept:'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailer: data.trailer,
        thumbnail: data.thumbnail,
        movieId: data.movieId,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    })
    .then(res => this._getResponseData(res));
  };

  deleteMovie(movieId){
    const token = localStorage.getItem('jwt');
    return fetch (`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      credentials:'include',
      headers: {
        Accept:'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => this._getResponseData(res))
  }

  getUserMovies = () => {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/movies`, {
        method: "GET",
        credentials:'include',
        headers: {
            Accept:"application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    }).then(res => this._getResponseData(res));
};
}

const MainApi = new Api({
  baseUrl: 'https://api.aii.nomoredomains.work',
  // baseUrl: 'http://localhost:3000',
  header: {
    'Content-Type': 'application/json'
  }
});

export default MainApi;
