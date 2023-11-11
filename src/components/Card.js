import "../index.css";

function Card({ cards }) {
  return (
    <section className="cards">
      {cards.map((card) => (
        <div className="card" key={card._id}>
          <img
            className="card__link"
            src={card.link}
            alt={`imagen de ${card.name}`}
          />
          <button className="card__trash"></button>
          <p className="card__name">{card.name}</p>
          <button className="card__heart"></button>
          <p className="card__like-count">{card.likes.length}</p>
        </div>
      ))}
    </section>
  );
}

export default Card;
