import React, { Component, useEffect } from "react";
import BeyCard from "../Components/BeyCard";

const Favorites = ({ generateCards }) => {

  // const generateCard = () =>
  //   filterCards.map((beyObj) => (
  //     <BeyCard
  //       key={beyObj.id}
  //       beyObj={beyObj}
  //       beyArray={beyArray}
  //     />
  //   ));

  return (
    <div className="favorites">
      <h1>Favorites</h1>
      {generateCards()}
    </div>
  );

};

//

export default Favorites;
