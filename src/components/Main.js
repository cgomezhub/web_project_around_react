import "../index.css";
import PopupWithForm from "./PopupWithForm";
import pencil from "../images/Vectoredit-pencil2.svg";
import { useEffect, useState } from "react";
import Api from "../utils/Api";
import Card from "./Card";

import ImagePopup from "./ImagePopup";

const api = new Api({
  address: 'https://around.nomoreparties.co/v1/web_es_09',
  headers: {
    authorization: '24db7356-9f7a-470a-979e-9ec3f25f6f02',
    "Content-Type": "application/json",
  },
});

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  onClose,
  isEditAvatarPopupOpen,
  isEditProfilePopupOpen,
  isAddPlacePopupOpen,
  selectedCard,
  onSelectedCard,
}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserData()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((error) => {
        console.log(error);
      });

    api
      .getCardData()
      .then((cardsData) => {
        setCards(cardsData);
        //console.log(cardsData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="page">
        <main className="container">
          <div className="profile">
            <div className="profile__avatar-container">
              <img
                src={userAvatar}
                alt="Avatar del usuario"
                className="profile__avatar"
              />
              <img
                src={pencil}
                alt="Pencil de editar"
                className="profile__avatar-edit"
                onClick={onEditAvatarClick}
              />
            </div>
            <ul className="profile__place">
              <li className="profile__name">{userName}</li>
              <li className="profile__about">{userDescription}</li>
            </ul>
            <button
              type="button"
              className="button-edit"
              onClick={onEditProfileClick}
            ></button>
            <button
              type="button"
              className="button-place"
              onClick={onAddPlaceClick}
            ></button>
          </div>
          <Card
            cards={cards}
            selectedCard={selectedCard}
            onSelectedCard={onSelectedCard}
          />
          {selectedCard && (
            <ImagePopup selectedCard={selectedCard} onClose={onClose} />
          )}
          <PopupWithForm
            title="Cambiar Foto de Perfil"
            name="avatar-form"
            isOpen={isEditAvatarPopupOpen}
            onClose={onClose}
            className={isEditAvatarPopupOpen ? "active" : "popup_is-opened"}
          >
            <button
              type="button"
              className="form__close"
              onClick={onClose}
            ></button>
            <input
              type="url"
              id="url-input-avatar"
              className="form__input"
              placeholder="Introduce URL (https://... o http://...)"
              required
            />
            <span className="url-input-avatar-error form__error"></span>
            <div className="form__button-container">
              <button
                id="button-avatar-save"
                type="submit"
                className="form__button"
              >
                Guardar
              </button>
              <button id="button-avatar-saving" className="form__button-saving">
                Guardando...
              </button>
            </div>
          </PopupWithForm>
          <PopupWithForm
            title="Editar perfil"
            name="profile-form"
            isOpen={isEditProfilePopupOpen}
            onClose={onClose}
            className={isEditProfilePopupOpen ? "active" : "popup_is-opened"}
          >
            <button
              type="button"
              className="form__close"
              onClick={onClose}
            ></button>
            <input
              id="text-input-name"
              className="form__input"
              type="text"
              placeholder="Nombre"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="text-input-name-error form__error"></span>
            <input
              id="text-input-about"
              type="text"
              className="form__input"
              placeholder="Acerca de mi"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="text-input-about-error form__error"></span>
            <div className="form__button-container">
              <button
                id="button-user-save"
                type="submit"
                className="form__button"
              >
                Guardar
              </button>
              <button id="button-user-saving" className="form__button-saving">
                Guardando...
              </button>
            </div>
          </PopupWithForm>
          <PopupWithForm
            title="Nuevo Lugar"
            name="add-form"
            isOpen={isAddPlacePopupOpen}
            onClose={onClose}
            className={isAddPlacePopupOpen ? "active" : "popup_is-opened"}
          >
            <button
              type="button"
              className="form__close"
              onClick={onClose}
            ></button>
            <input
              id="text-input-place"
              type="text"
              className="form__input"
              placeholder="Nombre del lugar"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="text-input-place-error form__error"></span>
            <input
              type="url"
              id="url-input-image"
              className="form__input"
              placeholder="Introduce URL (https://... o http://...)"
              required
            />
            <span className="url-input-image-error form__error"></span>
            <div className="form__button-container">
              <button
                id="button-add-save"
                type="submit"
                className="form__button"
              >
                Crear
              </button>
              <button id="button-add-saving" className="form__button-saving">
                Guardando...
              </button>
            </div>
          </PopupWithForm>
          <PopupWithForm title="¿Estás seguro/a?" name="sure-form">
            <button type="button" className="form__button">
              Sí
            </button>
          </PopupWithForm>
          {/*
            <form id="sure-form" className="form">
              <h2 className="form__title">¿Estás seguro/a?</h2>
              <button
                id="sure-form-close"
                type="button"
                className="form__close"
              ></button>
              <button type="button" className="form__button">
                Sí
              </button>
            </form> */}
        </main>
      </div>
    </div>
  );
}
export default Main;
