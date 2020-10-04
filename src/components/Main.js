import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import api from "../utils/api.js";
import Card from "./Card.js";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__picture-container">
          <div
            className="profile__picture"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
            alt="Профиль"
            onClick={props.onEditAvatar}
          ></div>
        </div>
        <div className="profile__container">
          <div className="profile__info">
            <div className="profile__info-container">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="Редактировать"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__text">{currentUser.about}</p>
          </div>
          <button
            className="profile__add-button"
            type="button"
            onClick={props.onAddPlace}
          ></button>
        </div>
      </section>
      <section className="elements">
        {props.cards.map(
          (element, i) => (
            <Card
              card={element}
              key={i}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete = {props.onCardDelete}
            />
          )
        )}
      </section>
    </main>
  );
}

export default Main;
