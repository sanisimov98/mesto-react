import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import api from "../utils/api.js";
import "../index.css";
import ImagePopup from "./ImagePopup.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [selectedCard, setSelectedCard] = React.useState();

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  api
  .getInitialCards()
  .then((res) => {
    setCards(res);
  })
  .catch((err) => console.log(err));

function handleCardLike(card) {
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  api
    .changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      const newCards = cards.map((element) =>
        element._id === card._id ? newCard : element
      );
      setCards(newCards);
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleCardDelete(card) {
  api
    .deleteCard(card._id)
    .then((card) => {
      const newCards = cards.filter((element) =>
        element._id !== card._id
      );
      setCards(newCards);
    })
    .catch((err) => {
      console.log(err);
    });
}

  React.useEffect(() => {
    api
      .getUserData()
      .then((userdata) => {
        setCurrentUser(userdata);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({ name: card.name, link: card.link });
  }

  function handleUpdateUser(values) {
    api
      .setProfileData(values)
      .then((userdata) => {
        setCurrentUser(userdata);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar(avatar) {
    api
      .setProfileImage(avatar).then((res) => {
        currentUser.avatar = res.avatar;
        closeAllPopups();
      }).catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlacePopupSubmit(values) {
    api.sendNewCard(values).then((newCard) => {
      setCards([...cards, newCard]);
      closeAllPopups();
    }).catch((err) => {
      console.log(err)
    })
  }

  function closeAllPopups() {
    setSelectedCard(undefined);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards = {cards}
          onCardLike = {handleCardLike}
          onCardDelete = {handleCardDelete}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup isOpen = {isAddPlacePopupOpen} onClose = {closeAllPopups} onSendCard = {handleAddPlacePopupSubmit} />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
