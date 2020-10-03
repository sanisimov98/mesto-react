import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function EditAvatarPopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const avatarRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="profile-image"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
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

export default EditAvatarPopup;
