import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function EditProfilePopup(props) {
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
    props.onUpdateUser({
      name : name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
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

export default EditProfilePopup;
