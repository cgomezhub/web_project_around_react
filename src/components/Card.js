import "../index.css";

import React from "react";
//import ImagePopup from "./ImagePopup";

function Card({ cards, selectedCard, onSelectedCard }) {
  console.log(selectedCard);
  return (
    <section className="cards">
      {cards.map((card) => (
        <div className="card" key={card._id}>
          <img
            className="card__link"
            src={card.link}
            alt={`imagen de ${card.name}`}
            onClick={() => onSelectedCard(card)}
          />
          <button className="card__trash"></button>
          <p className="card__name">{card.name}</p>
          <button className="card__heart"></button>
          <p className="card__like-count">{card.likes.length}</p>
        </div>
      ))}
      {/*{selectedCard && <ImagePopup selectedCard={selectedCard} />}}*/}
    </section>
  );
}

export default Card;
