import React from "react";
import api from "../utils/api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      api.getUserData().catch((err) => console.log(err)),
      api.getInitialCards().catch((err) => console.log(err)),
    ]).then(([UserData, InitialCards]) => {
      setUserName(UserData.name);
      setUserDescription(UserData.about);
      setUserAvatar(UserData.avatar);
      setCards(InitialCards);
    });
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__picture-container">
          <div
            className="profile__picture"
            style={{ backgroundImage: `url(${userAvatar})` }}
            alt="Профиль"
            onClick={props.onEditAvatar}
          ></div>
        </div>
        <div className="profile__container">
          <div className="profile__info">
            <div className="profile__info-container">
              <h1 className="profile__title">{userName}</h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="Редактировать"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__text">{userDescription}</p>
          </div>
          <button
            className="profile__add-button"
            type="button"
            onClick={props.onAddPlace}
          ></button>
        </div>
      </section>
      <section className="elements">
        {cards.map(
          (element, i) => (
            <Card card={element} key={i} onCardClick={props.onCardClick} />
          ),
          document.querySelector(".elements")
        )}
      </section>
    </main>
  );
}

export default Main;
