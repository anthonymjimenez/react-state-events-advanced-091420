import React, { Component } from "react";
import BeyCard from "../Components/BeyCard";

export default class Favorites extends Component {
  filterCards = () =>
    this.props.beyArray.filter(({ favorite }) => favorite === true);

  generateCard = () =>
    this.filterCards().map((beyonceObj) => (
      <BeyCard key={beyonceObj.id} beyObj={beyonceObj} />
    ));

  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.generateCard()}
      </div>
    );
  }
}
