class Api {
  constructor(options) {
    this._options = options;
  }

  handleResponse = (res) => {
    if (res.ok){
      return res
    }
    else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }  
  }

  getUserData() {
    return fetch(`${this._options.baseURL}/users/me`, {
      headers: this._options.headers,
    }).then((res) => {
      this.handleResponse(res);
        return res.json();
      })
    }

  getInitialCards() {
    return fetch(`${this._options.baseURL}/cards`, {
      headers: this._options.headers,
    })
      .then((res) => {
        this.handleResponse(res);
        return res.json();
      })
  }

  setProfileData(values) {
    return fetch(`${this._options.baseURL}/users/me`, {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify({
        name: values.name,
        about: values.about,
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
      this.handleResponse(res);
      return res.json();
    });
  }

  changeLikeCardStatus(cardId, isLiked) {
    if (isLiked) {
      return fetch(`${this._options.baseURL}/cards/likes/${cardId}`, {
        method: "PUT",
        headers: this._options.headers,
      }).then((res) => {
        return res.json();
      });
    } else {
      return fetch(`${this._options.baseURL}/cards/likes/${cardId}`, {
        method: "DELETE",
        headers: this._options.headers,
      }).then((res) => {
        return res.json();
      });
    }
  }

  setProfileImage(value) {
    return fetch(`${this._options.baseURL}/users/me/avatar`, {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify({
        avatar : value.avatar,
      }),
    }).then((res) => {
      return res.json();
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._options.baseURL}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._options.headers,
    }).then((res) => {
      return res.json();
    });
  }
}

const baseurl = "https://mesto.nomoreparties.co/v1/cohort-14";
const header = "57c05f36-a8d9-486d-bc00-4738c3850df5";

const api = new Api({
  baseURL: baseurl,
  headers: {
    authorization: header,
    "Content-Type": "application/json",
  },
});

export default api;
