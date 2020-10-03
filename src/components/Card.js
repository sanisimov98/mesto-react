import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `element__delete ${isOwn ? 'element__delete_visible' : ''}`
  ); 
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like ${isLiked ? 'element__like_active' : ''}`; 

  function handleClick() {
    props.onCardClick(props.card);
  };

  function handleLike() {
    props.onCardLike(props.card);
  }

  function handleDelete() {
    props.onCardDelete(props.card);
  }

  return (
    <div className="element" key={props.i}>
      <div
        className="element__image"
        style={{ backgroundImage: `url(${props.card.link})` }}
        onClick={handleClick}
      ></div>
      <button className={cardDeleteButtonClassName} onClick={handleDelete}></button>
      <div className="element__container">
        <p className="element__caption">{props.card.name}</p>
        <div className="element__like-container">
          <button className={cardLikeButtonClassName} onClick={handleLike}></button>
          <p className="element__like-counter">
            {props.card.likes.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
