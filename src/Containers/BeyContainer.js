import React from "react";
import BeyCard from "../Components/BeyCard";

const BeyContainer = ({ beyArray, setBeyArray }) => {
 

  const generateCards = () =>
    beyArray.map((beyObj) => (
      <BeyCard
        key={beyObj.id}
        beyObj={beyObj}
        beyArray={beyArray}
        setBeyArray={setBeyArray}
        isIndexPage={() => true} // ignore when favorite and clicked from index page 
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
