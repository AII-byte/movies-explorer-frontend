export const BASE_URL = 'https://api.aii.nomoredomains.work';

const checkRequestResult = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials:'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password })
  })
  .then(checkRequestResult)
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials:'include',
    headers: { 'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  })
  .then(checkRequestResult)
  .then((data) => data)
}

export const getContent = (token) => {
  return fetch(`${BASE_URL}/me`, {
    method: 'GET',
    credentials:'include',
    headers: {
      'Content-Type': 'application/json',
    },
})
  .then(checkRequestResult)
  .then((data) => data)
}
