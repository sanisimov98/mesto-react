import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import "../index.css";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: undefined,
    };
  }

  handleEditAvatarClick = () => {
    this.setState({
      isEditAvatarPopupOpen: true,
    });
  };

  handleAddPlaceClick = () => {
    this.setState({ isAddPlacePopupOpen: true });
  };

  handleEditProfileClick = () => {
    this.setState({
      isEditProfilePopupOpen: true,
    });
  };

  handleCardClick = (card) => {
    this.setState({
      selectedCard: { name: card.name, link: card.link },
    });
  };

  closeAllPopups = () => {
    this.setState({
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      isEditAvatarPopupOpen: false,
      selectedCard: undefined,
    });
  };

  render() {
    return (
      <div className="page">
        <Header />
        <Main
          onEditProfile={this.handleEditProfileClick}
          onEditAvatar={this.handleEditAvatarClick}
          onAddPlace={this.handleAddPlaceClick}
          onCardClick={this.handleCardClick}
        />
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          isOpen={this.state.isEditProfilePopupOpen}
          onClose={this.closeAllPopups}
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
          isOpen={this.state.isAddPlacePopupOpen}
          onClose={this.closeAllPopups}
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
              <span
                id="image__title-error"
                className="popup__form-error"
              ></span>
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
          isOpen={this.state.isEditAvatarPopupOpen}
          onClose={this.closeAllPopups}
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
              <span
                id="profile-image-error"
                className="popup__form-error"
              ></span>
            </>
          }
        />
        <ImagePopup
          card={this.state.selectedCard}
          onClose={this.closeAllPopups}
        />
        )
        <Footer />
      </div>
    );
  }
}

export default App;
