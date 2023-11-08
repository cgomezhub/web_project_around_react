import "../index.css";

const handleCloseClick = () => {
  document.querySelector("#popup").classList.remove("active");
  document.querySelector(".form").classList.remove("active");
};

function PopupWithForm({ title, name, children }) {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      handleCloseClick();
    }
  });
  document.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup")) {
      handleCloseClick();
    }
  });

  return (
    <form id={name} className="form" noValidate>
      <h2 className="form__title">{title}</h2>
      <button
        type="button"
        className="form__close"
        onClick={handleCloseClick}
      ></button>
      {children}
    </form>
  );
}

export default PopupWithForm;
