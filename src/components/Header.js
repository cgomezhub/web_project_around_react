import logo from "../images/logo-around-theUS.svg";
import pencil from "../images/Vectoredit-pencil2.svg";

import '../index.css';
 
function Header() {
  
  const handleEditAvatarClick = () => {
    document.querySelector('#popup').classList.add('active');
    document.querySelector('#avatar-form').classList.add('active');
  };

  const handleEditProfileClick = () => {
    document.querySelector('#popup').classList.add('active');
    document.querySelector('#profile-form').classList.add('active');

  };

  const handleAddPlaceClick = () => {
    document.querySelector('#popup').classList.add('active');
    document.querySelector('#add-form').classList.add('active');
  };


  return (
    
      <div className="page">
        <header className="header">
          <img
            src={logo}
            alt="logo around the US"
            className="logo"
          />
          <div className="line"></div>
          <div className="profile">
            <div className="profile__avatar-container">
              <img
                src="https://scontent.fbrm1-1.fna.fbcdn.net/v/t39.30808-6/396509710_10159914931368932_4292595905199376147_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TVpIdsYxqn8AX8cq8Xu&_nc_ht=scontent.fbrm1-1.fna&oh=00_AfCcH25C4Hm6IfEZ48zRngj-SxNqWAGxyk5YooFswm2V1A&oe=65424080"
                alt="Avatar del usuario"
                className="profile__avatar"
              />
              <img
                src={pencil}
                alt="Pencil de editar"
                className="profile__avatar-edit"
                onClick={handleEditAvatarClick}
              />
            </div>
            <ul className="profile__place">
              <li className="profile__name">Carlos Gomez</li>
              <li className="profile__about">Web Developer</li>
            </ul>
            <button type="button" className="button-edit" onClick={handleEditProfileClick}></button>
            <button type="button" className="button-place" onClick={handleAddPlaceClick}></button>
          </div>
        </header>        
      </div>
    
  );
}

export default Header;

