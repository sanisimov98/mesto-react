import React from "react";

function ImagePopup(props) {
  return (
    <div
      className={`popup__fullscreen ${
        props.card !== undefined ? "popup_opened" : ""
      }`}
    >
      <div className="popup__fullscreen-container">
        {props.card !== undefined ? (
          <img
            className="popup__fullscreen-image"
            src={props.card.link}
            alt={props.card.name}
          />
        ) : (
          <img className="popup__fullscreen-image" src="#" alt="#" />
        )}
        <button
          className="popup__fullscreen-close"
          onClick={props.onClose}
        ></button>
        <p className="popup__fullscreen-caption">
          {props.card !== undefined ? props.card.name : ""}
        </p>
      </div>
    </div>
  );
}

export default ImagePopup;
