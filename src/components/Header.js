import logo from "../images/logo-around-theUS.svg";
import pencil from "../images/Vectoredit-pencil2.svg";

import '../index.css';
 
function Header() {
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
      </div>
    </body>
  );
}

export default Header;

