import "../index.css";



function PopupWithForm({ title, name, children }) {
  

  return (
    <section className={`popup popup_type_${name}`} >
      <form id={name} className="form" noValidate>
        <h2 className="form__title">{title}</h2>
        {children}
      </form>
    </section>
  );
}

export default PopupWithForm;
