import React from "react";
import BeyCard from "../Components/BeyCard";

export default class BeyContainer extends React.Component {
  generateCards = () =>
    this.props.beyArray.map((beyonceObj) => (
      <div onClick={() => this.findAndChange(beyonceObj.id)}>
        <BeyCard key={beyonceObj.id} beyObj={beyonceObj} />
      </div>
    ));

  findAndChange = (id) => {
    const isId = (objId) => id === objId.id;
    const index = this.props.beyArray.findIndex(isId);
    this.props.beyArray[index].favorite = !this.props.beyArray[index].favorite;
  };

  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.generateCards()}
      </div>
    );
  }
}
