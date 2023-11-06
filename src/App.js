import logo from "../src/images/logo-around-theUS.svg";
import pencil from "../src/images/Vectoredit-pencil2.svg";

import './index.css';
 
function App() {
  return (
    <body>
      <div class="page">
        <header class="header">
          <img
            src={logo}
            alt="logo around the US"
            class="logo"
          />
          <div class="line"></div>
          <div class="profile">
            <div class="profile__avatar-container">
              <img
                src="https://scontent.fbrm1-1.fna.fbcdn.net/v/t39.30808-6/396509710_10159914931368932_4292595905199376147_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TVpIdsYxqn8AX8cq8Xu&_nc_ht=scontent.fbrm1-1.fna&oh=00_AfCcH25C4Hm6IfEZ48zRngj-SxNqWAGxyk5YooFswm2V1A&oe=65424080"
                alt="Avatar del usuario"
                class="profile__avatar"
              />
              <img
                src={pencil}
                alt="Pencil de editar"
                class="profile__avatar-edit"
              />
            </div>
            <ul class="profile__place">
              <li class="profile__name">Carlos Gomez</li>
              <li class="profile__about">Web Developer</li>
            </ul>
            <button type="button" class="button-edit"></button>
            <button type="button" class="button-place"></button>
          </div>
        </header>

        <main class="container">

          <section class="cards"></section>

          <section id="popup-profile" class="popup-profile">
            <form id="profile-form" class="form" novalidate>
              <button type="button" class="form__close"></button>
              <h1 class="form__title">Editar perfil</h1>
              <input
                id="text-input-name"
                class="form__input"
                type="text"
                placeholder="Nombre"
                minlength="2"
                maxlength="40"
                required
              />
              <span class="text-input-name-error form__error"></span>
              <input
                id="text-input-about"
                type="text"
                class="form__input"
                placeholder="Acerca de mi"
                minlength="2"
                maxlength="200"
                required
              />
              <span class="text-input-about-error form__error"></span>
              <div class="form__button-container">
                <button id="button-user-save" type="submit" class="form__button">
                  Guardar
                </button>
                <button id="button-user-saving" class="form__button-saving">
                  Guardando...
                </button>
              </div>
            </form>
          </section>

          <section id="popup-place" class="popup-place">
            <form id="add-form" class="form" novalidate>
              <button id="add-form-close" type="button" class="form__close"></button>
              <h2 class="form__title">Nuevo lugar</h2>
              <input
                id="text-input-place"
                type="text"
                class="form__input"
                placeholder="Nombre del lugar"
                minlength="2"
                maxlength="30"
                required
              />
              <span class="text-input-place-error form__error"></span>
              <input
                type="url"
                id="url-input-image"
                class="form__input"
                placeholder="Introduce URL (https://... o http://...)"
                required
              />
              <span class="url-input-image-error form__error"></span>
              <div class="form__button-container">
                <button id="button-add-save" type="submit" class="form__button">
                  Crear
                </button>
                <button id="button-add-saving" class="form__button-saving">
                  Guardando...
                </button>
              </div>
            </form>
          </section>

          <section class="popup-erase">
            <div class="popup-erase__container">
              <button
                id="popup-erase-close"
                type="button"
                class="popup-erase__close"
              ></button>
              <h2 class="popup-erase__title">¿Estás seguro/a?</h2>
              <button type="button" class="popup-erase__confirm">
                Sí
              </button>
            </div>
          </section>      

          <section class="popup-avatar">
            <form id="avatar-form" class="form" novalidate>
              <button
                type="button"
                id="avatar-form-close"
                class="form__close"
              ></button>
              <h2 class="form__title">Cambiar foto de perfil</h2>
              <input
                type="url"
                id="url-input-avatar"
                class="form__input"
                placeholder="Introduce URL (https://... o http://...)"
                required
              />
              <span class="url-input-avatar-error form__error"></span>
              <div class="form__button-container">
                <button
                  id="button-avatar-save"
                  type="submit"
                  class="form__button"
                >
                  Guardar
                </button>
                <button id="button-avatar-saving" class="form__button-saving">
                  Guardando...
                </button>
              </div>
            </form>
          </section>     

        </main>
        <footer class="footer">
          <p class="footer__copyright">© 2023. Carlos Gomez</p>
        </footer>
      </div>
    </body>
  );
}

export default App;
