import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import PropTypes from 'prop-types';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name : name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
      children={
        <>
          <input
            id="username"
            className="popup__form-item popup__form-item_el_name"
            onChange={handleNameChange}
            type="text"
            name="username"
            value={name || ''}
            placeholder=""
            minLength="2"
            maxLength="40"
            required
          />
          <span id="username-error" className="popup__form-error"></span>
          <input
            id="text"
            className="popup__form-item popup__form-item_el_text"
            onChange={handleDescriptionChange}
            type="text"
            name="text"
            value={description || ''}
            placeholder=""
            minLength="2"
            maxLength="200"
            required
          />
          <span id="text-error" className="popup__form-error"></span>
        </>
      }
    />
  );
}

EditProfilePopup.propTypes = {
  onUpdateUser: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
} 

export default EditProfilePopup;
