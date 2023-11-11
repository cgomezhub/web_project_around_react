import Api from "../components/Api";

const ap = new Api({
  address: 'https://around.nomoreparties.co/v1/web_es_09',
  headers: {
    authorization: '24db7356-9f7a-470a-979e-9ec3f25f6f02',
    "Content-Type": "application/json",
  },
});

export default ap;
