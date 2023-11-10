import "../index.css";

function PopupWithForm({ title, name, children, isOpen, onClose }) {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget){
      onClose();
    }
  };

  const handleKeyDown = (event) => {
    
    if (event.key === "Escape") {
      onClose();
    }
  };

  return (
    <section
      className={`popup ${isOpen ? "popup_is-opened" : ""}`}
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <form id={name} className="form" noValidate>
        <h2 className="form__title">{title}</h2>
        {children}
      </form>
    </section>
  );
}

export default PopupWithForm;
