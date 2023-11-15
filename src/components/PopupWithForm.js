import "../index.css";

function PopupWithForm({ title, name, children, isOpen, onClose }) {
  return (
    <section
      className={`popup ${isOpen ? "popup_is-opened" : ""}`}
      onClick={onClose}
      onKeyDown={onClose}
      tabIndex={0}
    >
      <button type="button" className="form__close" onClick={onClose}></button>
      <form id={name} className="form" noValidate>
        <h2 className="form__title">{title}</h2>
        {children}
      </form>
    </section>
  );
}

export default PopupWithForm;
