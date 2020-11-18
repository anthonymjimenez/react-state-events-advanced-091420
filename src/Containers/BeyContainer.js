import React from "react";
import BeyCard from "../Components/BeyCard";

const BeyContainer = ({ beyArray, setBeyArray }) => {
  const ignoreWhenFavIsTrue = (placeholder) => {
    return true;
  };

  const generateCards = () =>
    beyArray.map((beyObj) => (
      <BeyCard
        key={beyObj.id}
        beyObj={beyObj}
        beyArray={beyArray}
        setBeyArray={setBeyArray}
        isIndex={ignoreWhenFavIsTrue}
      />
    ));

  return (
    <div className="index">
      <h1>Index</h1>
      {generateCards()}
    </div>
  );
};

export default BeyContainer;
