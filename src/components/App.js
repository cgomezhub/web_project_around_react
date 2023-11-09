import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
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
    <div>
      <Header />
      <Main 
      onEditProfileClick = {handleEditProfileClick}
      onAddPlaceClick = {handleAddPlaceClick}
      onEditAvatarClick = {handleEditAvatarClick}
      />
      <Footer />
    </div>
  );
}

export default App;
