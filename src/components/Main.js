import "../index.css";
import PopupWithForm from "./PopupWithForm";

function Main() {
  

  return (
    <div>
      <div className="page">
        <main className="container">
          <section className="cards"></section>

          <section id="popup" className="popup">
            <PopupWithForm title="Cambiar Foto de Perfil" name="avatar-form">
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
                <button
                  id="button-avatar-saving"
                  className="form__button-saving"
                >
                  Guardando...
                </button>
              </div>
            </PopupWithForm>
            <PopupWithForm title="Editar perfil" name="profile-form">
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
            <PopupWithForm title="Nuevo Lugar" name="add-form">
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
          </section>
        </main>
      </div>
    </div>
  );
}

export default Main;
