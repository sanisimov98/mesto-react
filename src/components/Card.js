import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.onCardClick(this.props.card);
}

  render() {
    return (
      <div className="element" key={this.props.i}>
        <div
          className="element__image"
          style={{ backgroundImage: `url(${this.props.card.link})` }}
          onClick={this.handleClick}
        ></div>
        <button className="element__delete"></button>
        <div className="element__container">
          <p className="element__caption">{this.props.card.name}</p>
          <div className="element__like-container">
            <button className="element__like"></button>
            <p className="element__like-counter">
              {this.props.card.likes.length}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
