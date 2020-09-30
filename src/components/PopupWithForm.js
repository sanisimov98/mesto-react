import React from "react";

function PopupWithForm(props) {
  return (
    <form
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
      name={`popup_type_${props.name}`}
      method="GET"
      action="#"
      noValidate
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__form-close"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        <div className="popup__inputs">
          <h2 className="popup__form-title">{props.title}</h2>
          <fieldset className="popup__form">
            {props.children}
            <button type="submit" className="popup__form-button">
              {props.buttonText}
            </button>
          </fieldset>
        </div>
      </div>
    </form>
  );
}

export default PopupWithForm;
