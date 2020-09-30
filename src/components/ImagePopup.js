import React from "react";

class ImagePopup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={`popup__fullscreen ${
          this.props.card !== undefined ? "popup_opened" : ""
        }`}
      >
        <div className="popup__fullscreen-container">
          {this.props.card !== undefined ? (
            <img
              className="popup__fullscreen-image"
              src={this.props.card.link}
              alt={this.props.card.name}
            />
          ) : (
            <img className="popup__fullscreen-image" src="#" alt="#" />
          )}
          <button
            className="popup__fullscreen-close"
            onClick={this.props.onClose}
          ></button>
          <p className="popup__fullscreen-caption">{this.props.card !== undefined ? this.props.card.name : ''}</p>
        </div>
      </div>
    );
  }
}

export default ImagePopup;
