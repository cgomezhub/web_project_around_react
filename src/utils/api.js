class Api {
  constructor(options) {
    this.address = options.address;
    this.headers = options.headers;
  }
  getUserData() {
    return fetch(`${this.address}/users/me`, {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Error: " + res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const api = new Api({
  address: 'https://around.nomoreparties.co/v1/web_es_09',
  headers: {
    authorization: '24db7356-9f7a-470a-979e-9ec3f25f6f02',
    "Content-Type": "application/json",
  },
});

export { api };
