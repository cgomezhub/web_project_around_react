import React, { useState, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContexts";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDesriptionChange(e) {
    setDescription(e.target.value);
  }

  const currentUser = useContext(CurrentUserContext);
  //console.log(currentUser);
  // Después de cargar el usuario actual desde la API
  // sus datos serán usados en componentes gestionados.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    // Evita que el navegador navegue hacia la dirección del formulario
    e.preventDefault();

    // Pasa los valores de los componentes gestionados al controlador externo
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Editar perfil"
      name="profile-form"
      isOpen={isOpen}
      onClose={onClose}
      className={isOpen ? "active" : "popup_is-opened"}
      onSubmit={handleSubmit}
    >
      <input
        id="text-input-name"
        className="form__input"
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Nombre"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="text-input-name-error form__error"></span>
      <input
        id="text-input-about"
        type="text"
        value={description}
        onChange={handleDesriptionChange}
        className="form__input"
        placeholder="Acerca de mi"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="text-input-about-error form__error"></span>
      <div className="form__button-container">
        <button id="button-user-save" type="submit" className="form__button">
          Guardar
        </button>
        <button id="button-user-saving" className="form__button-saving">
          Guardando...
        </button>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
