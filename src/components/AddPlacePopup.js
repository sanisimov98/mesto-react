import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup(props) {
    const [cardName, setCardName] = React.useState('');
    const [cardLink, setCardLink] = React.useState('');

    function handleNameChange(evt) {
        setCardName(evt.target.value);
    }

    function handleLinkChange(evt) {
        setCardLink(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onSendCard({
            name: cardName,
            link: cardLink,
        })
    }

    return(<PopupWithForm
        name="add-card"
        title="Новое место"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
        buttonText="Создать"
        children={
          <>
            <input
              id="image__title"
              className="popup__form-item popup__form-item_el_card-title"
              type="text"
              name="image__title"
              value={cardName || ''}
              placeholder="Название"
              required
              onChange={handleNameChange}
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
              value={cardLink || ''}
              placeholder="Ссылка на картинку"
              required
              onChange={handleLinkChange}
            />
            <span id="image__link-error" className="popup__form-error"></span>
          </>
        }
      />)
}

export default AddPlacePopup;