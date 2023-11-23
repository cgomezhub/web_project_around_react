import "../index.css";
import PopupWithForm from "./PopupWithForm";
import pencil from "../images/Vectoredit-pencil2.svg";
import React, { useEffect, useState, useContext } from "react";
import api from "../utils/api";
import Card from "./Card";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from './EditProfilePopup';

import { CurrentUserContext } from "../contexts/CurrentUserContexts";

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  onEraseCardClick,
  onClose,
  isEditAvatarPopupOpen,
  isEditProfilePopupOpen,
  isAddPlacePopupOpen,
  isEraseCardPopupOpen,
  selectedCard,
  onSelectedCard,
}) {
  const currentUser = useContext(CurrentUserContext);
  

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getCardInfo()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleCardLike(card) {
    
    // Verifica una vez más si a esta tarjeta ya le han dado like
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Envía una petición a la API y obtén los datos actualizados de la tarjeta
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
     
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    
    // Envía una petición a la API y excluye la tarjeta seleccionada
    api.deleteCard(card._id).then(() => {
      
      setCards((state) => state.filter((c) => c._id !== card._id));
    });
  }

  return (
    <div>
      <div className="page">
        <main className="container">
          <div className="profile">
            <div className="profile__avatar-container">
              <img
                src={currentUser.avatar}
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
              <li className="profile__name">{currentUser.name}</li>
              <li className="profile__about">{currentUser.about}</li>
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
            onEraseCardClick={onEraseCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
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
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={onClose} />
          <PopupWithForm
            title="Nuevo Lugar"
            name="add-form"
            isOpen={isAddPlacePopupOpen}
            onClose={onClose}
            className={isAddPlacePopupOpen ? "active" : "popup_is-opened"}
          >
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
          <PopupWithForm
            title="¿Estás seguro/a?"
            name="sure-form"
            isOpen={isEraseCardPopupOpen}
            onClose={onClose}
            className={isEraseCardPopupOpen ? "active" : "popup_is-opened"}
          >
            <button
              type="button"
              className="form__button"
              onClick={handleCardDelete}
            >
              Sí
            </button>
          </PopupWithForm>
        </main>
      </div>
    </div>
  );
}
export default Main;
