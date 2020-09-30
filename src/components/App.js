import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import "../index.css";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [selectedCard, setSelectedCard] = React.useState();

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

  function closeAllPopups() {
    setSelectedCard(undefined);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }
  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText="Сохранить"
        children={
          <>
            <input
              id="username"
              className="popup__form-item popup__form-item_el_name"
              type="text"
              name="username"
              defaultValue=""
              placeholder=""
              minLength="2"
              maxLength="40"
              required
            />
            <span id="username-error" className="popup__form-error"></span>
            <input
              id="text"
              className="popup__form-item popup__form-item_el_text"
              type="text"
              name="text"
              defaultValue=""
              placeholder=""
              minLength="2"
              maxLength="200"
              required
            />
            <span id="text-error" className="popup__form-error"></span>
          </>
        }
      />
      <PopupWithForm
        name="add-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText = "Создать"
        children={
          <>
            <input
              id="image__title"
              className="popup__form-item popup__form-item_el_card-title"
              type="text"
              name="image__title"
              defaultValue=""
              placeholder="Название"
              required
            />
            <span id="image__title-error" className="popup__form-error"></span>
            <input
              id="image__link"
              className="popup__form-item popup__form-item_el_card-image"
              type="url"
              name="image__link"
              defaultValue=""
              placeholder="Ссылка на картинку"
              required
            />
            <span id="image__link-error" className="popup__form-error"></span>
          </>
        }
      />
      <PopupWithForm
        name="profile-image"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText = "Сохранить"
        children={
          <>
            <input
              id="profile-image"
              className="popup__form-item popup__form-item_el_profile-image"
              type="url"
              name="profile-image"
              defaultValue=""
              placeholder="Ссылка на картинку"
              required
            />
            <span id="profile-image-error" className="popup__form-error"></span>
          </>
        }
      />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
      <Footer />
    </div>
  );
}

export default App;
