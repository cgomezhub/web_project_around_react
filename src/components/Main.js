import "../index.css";
import PopupWithForm from "./PopupWithForm";
import pencil from "../images/Vectoredit-pencil2.svg";
import { api } from "../utils/api";
import { useEffect, useState } from "react";

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  onClose,
  isEditAvatarPopupOpen,
  isEditProfilePopupOpen,
  isAddPlacePopupOpen,

}) {
  const [userName, setUserName] = useState(false);
  const [userDescription, setUserDescription] = useState(false);
  const [userAvatar, setUserAvatar] = useState(false);

  useEffect(() => {
    api.getUserData()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
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
                src={userAvatar.toString()}
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
          <section className="cards"></section>

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

          <div className="image-container">
            <button type="button" className="form__close"></button>
            <img
              alt="imagen del gran canon"
              src="https://images.unsplash.com/photo-1643252494989-81cd0b5bead2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              className="image-container__photo"
            />
            <p className="image-container__name"></p>
          </div>
        </main>
      </div>
    </div>
  );
}
export default Main;
