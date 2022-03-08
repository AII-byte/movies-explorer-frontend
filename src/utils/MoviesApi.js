export const getMovies = () => {
  return fetch("https://api.nomoreparties.co/beatfilm-movies", {
      method: "GET",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
  }).then((res) => {
      if (res.ok) {
          return res.json();
      }
      return Promise.reject(res.status);
  });
};
