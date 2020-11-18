import React from "react";
import BeyCard from "../Components/BeyCard";


const BeyContainer = ({beyArray, setArray}) => {

  const generateCards = () =>
    beyArray.map((beyonceObj) => (
      <div onClick={() => findAndChange(beyonceObj.id)}>
        <BeyCard key={beyonceObj.id} beyObj={beyonceObj} />
      </div>
    ));

  const updateArray = (id) => 
  beyArray.map((beyObj) => beyObj.id === id ? {
      ...beyObj,
      favorite: !beyObj.favorite
    } : beyObj);

  const findAndChange = (id) => {
    setArray(updateArray(id))
  };

 
    return (
      <div className="index">
        <h1>Index</h1>
        {generateCards()}
      </div>
    );
  
}

export default BeyContainer;