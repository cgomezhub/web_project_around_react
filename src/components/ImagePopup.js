import "../index.css";
import React from "react";

function ImagePopup({ selectedCard, onClose }) {
  console.log(selectedCard);
  console.log(selectedCard.link);
  console.log(onclose);

  

  return (
    <div className={`image-popup ${selectedCard ? "image-popup_visible" : ""}`}>
      <button
        type="button"
        className="image-popup__close"
        onClick={onClose}
      ></button>
      <img
        alt={`imagen de ${selectedCard.name}`}
        src={selectedCard.link}
        className="image-popup__photo"
      />
      <p className="image-popup__name">{selectedCard.name}</p>
    </div>
  );
}

export default ImagePopup;
