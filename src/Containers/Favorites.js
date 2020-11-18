import React, { Component, useEffect } from "react";
import BeyCard from "../Components/BeyCard";

const Favorites = ({beyArray}) => {


  const filterCards = () =>
   beyArray.filter(({ favorite }) => favorite === true);

  const generateCard = () =>
    filterCards().map((beyonceObj) => (
      <BeyCard key={beyonceObj.id} beyObj={beyonceObj} />
    ));

    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {generateCard()}
      </div>
    );
}

export default Favorites;