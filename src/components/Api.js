export default class Api {
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
  getCardData() {
    return fetch(`${this.address}/cards`, {
      headers: this.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject('Error: ' + res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  
}
