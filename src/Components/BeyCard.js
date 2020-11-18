import React from "react";

const BeyCard = ({ beyObj: { id, name, img, favorite } }) => {
  return (
    <div
      className="card"
    >
      <h3>{(id, img, favorite, name)} </h3>
    </div>
  );
};

export default BeyCard;
