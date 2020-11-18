import React from "react";

const BeyContainer = ({ generateCards }) => {
 
  return (
    <div className="index">
      <h1>Index</h1>
      {generateCards()}
    </div>
  );
};

export default BeyContainer;
