import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  const handleEditAvatarClick = () => {
    document.querySelector('.popup_type_avatar-form').classList.add('active');
    document.querySelector('#avatar-form').classList.add('active');
  };

  const handleEditProfileClick = () => {
    document.querySelector('.popup_type_profile-form ').classList.add('active');
    document.querySelector('#profile-form').classList.add('active');

  };

  const handleAddPlaceClick = () => {
    document.querySelector('.popup_type_add-form ').classList.add('active');
    document.querySelector('#add-form').classList.add('active');
  };

  const closeAllPopups = () => {
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".form").classList.remove("active");
  };
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllPopups();
    }
  });
  document.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup")) {
      closeAllPopups();
    }
  });


  return (
    <div>
      <Header />
      <Main 
      onEditProfileClick = {handleEditProfileClick}
      onAddPlaceClick = {handleAddPlaceClick}
      onEditAvatarClick = {handleEditAvatarClick}
      onClose = {closeAllPopups}
      />
      <Footer />
    </div>
  );
}

export default App;
