import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import PropTypes from 'prop-types';

function EditAvatarPopup({ onUpdateAvatar, isOpen, onClose }) {
  const avatarRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="profile-image"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
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
            ref={avatarRef}
          />
          <span id="profile-image-error" className="popup__form-error"></span>
        </>
      }
    />
  );
}

EditAvatarPopup.propTypes = {
  onUpdateAvatar: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
} 

export default EditAvatarPopup;
