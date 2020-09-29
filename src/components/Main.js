import React from "react";
import PopupWithForm from "./PopupWithForm";
import api from "../utils/API.js";
import Card from "./Card.js";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userDescription: "",
      userAvatar: "",
      cards: [],
    };
  }

  render() {
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__picture-container">
            <div
              className="profile__picture"
              style={{ backgroundImage: `url(${this.state.userAvatar})` }}
              alt="Профиль"
              onClick={this.props.onEditAvatar}>
            </div>
          </div>
          <div className="profile__container">
            <div className="profile__info">
              <div className="profile__info-container">
                <h1 className="profile__title">{this.state.userName}</h1>
                <button
                  className="profile__edit-button"
                  type="button"
                  aria-label="Редактировать"
                  onClick={this.props.onEditProfile}
                ></button>
              </div>
              <p className="profile__text">{this.state.userDescription}</p>
            </div>
            <button
              className="profile__add-button"
              type="button"
              onClick={this.props.onAddPlace}
            ></button>
          </div>
        </section>
        <section className="elements">
        {this.state.cards.map((element, i) => 
             (
              <Card card = {element} key = {i} onCardClick = {this.props.onCardClick} />
            )
          , document.querySelector('.elements'))}
        </section>
      </main>
    );
  }

  
  componentDidMount() {
    api
      .getUserData()
      .then((res) =>
        this.setState({
          userName: res.name,
          userDescription: res.about,
          userAvatar: res.avatar,
        })
      )
      .catch((err) => console.log(err));
    api
      .getInitialCards()
      .then((res) => this.setState({
        cards: res,
      }))
      .catch((err) => console.log(err));
  }
}

export default Main;
