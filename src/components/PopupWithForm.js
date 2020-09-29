import React from "react";

class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <form
        className={`popup popup_type_${this.props.name} ${
          this.props.isOpen ? "popup_opened" : ""
        }`}
        name={`popup_type_${this.props.name}`}
        method="GET"
        action="#"
        noValidate
      >
        <div className="popup__container">
          <button
            type="button"
            className="popup__form-close"
            aria-label="Закрыть"
            onClick = {this.props.onClose}
          ></button>
          <div className="popup__inputs">
            <h2 className="popup__form-title">{this.props.title}</h2>
            <fieldset className="popup__form">
              {this.props.children}
              <button type="submit" className="popup__form-button">
                Сохранить
              </button>
            </fieldset>
          </div>
        </div>
      </form>
    );
  }
}

export default PopupWithForm;
