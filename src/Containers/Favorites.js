import React, { Component, useEffect } from "react";
import BeyCard from "../Components/BeyCard";

const Favorites = ({ beyArray, setBeyArray }) => {
  const filterCards = () =>
    beyArray.filter(({ favorite }) => favorite === true);

  const generateCard = () =>
    filterCards().map((beyObj) => (
      <BeyCard
        key={beyObj.id}
        beyObj={beyObj}
        beyArray={beyArray}
        setBeyArray={setBeyArray}
        isIndex={(element) => {
          window.alert("I got a hot sauce in my bag, swag");
          return false;
        }}
      />
    ));

  return (
    <div className="favorites">
      <h1>Favorites</h1>
      {generateCard()}
    </div>
  );
};

//

export default Favorites;
