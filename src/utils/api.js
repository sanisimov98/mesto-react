class Api {
  constructor(options) {
    this._options = options;
  }

  getUserData() {
    return fetch(`${this._options.baseURL}/users/me`, {
      headers: this._options.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  getInitialCards() {
    return fetch(`${this._options.baseURL}/cards`, {
      headers: this._options.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((res) => {
        return res;
      });
  }

  setProfileData(values) {
    return fetch(`${this._options.baseURL}/users/me`, {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify({
        name: values["username"],
        about: values["text"],
        avatar: values["avatar"],
      }),
    }).then((res) => {
      return res.json();
    });
  }

  sendNewCard(values) {
    return fetch(`${this._options.baseURL}/cards`, {
      method: "POST",
      headers: this._options.headers,
      body: JSON.stringify({
        name: values["name"],
        link: values["link"],
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  likeButton(cardId) {
    return fetch(`${this._options.baseURL}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._options.headers,
    });
  }

  dislikeButton(cardId) {
    return fetch(`${this._options.baseURL}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._options.headers,
    });
  }

  setProfileImage(value) {
    return fetch(`${this._options.baseURL}/users/me/avatar`, {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify({
        avatar: value,
      }),
    }).then((res) => {
      return res.json();
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._options.baseURL}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._options.headers,
    });
  }
}

const baseurl = "https://mesto.nomoreparties.co/v1/cohort-14";
const header = "57c05f36-a8d9-486d-bc00-4738c3850df5"

const api = new Api({
  baseURL: baseurl,
  headers: {
    authorization: header,
    "Content-Type": "application/json",
  },
});

export default api;
