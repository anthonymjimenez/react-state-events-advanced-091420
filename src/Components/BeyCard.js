import React from "react";

const BeyCard = ({
  beyObj: { id, name, img, favorite },
  beyArray,
  setBeyArray,
  isIndex,
}) => {
  const updateArray = (id) => {
    return beyArray.map((beyObj) =>
      beyObj.id === id ? alertAndChange(beyObj) : beyObj
    );
  };

  const alertAndChange = (beyObj) => {
    // if (beyObj.favorite === true & clicked From index) do nothing
    if (beyObj.favorite === true) {
      if (isIndex(beyObj) === true) {
        return beyObj; // return OUT when fav is removed from index
      }
    }
    return {
      ...beyObj,
      favorite: !beyObj.favorite,
    };
  };

  const findAndChange = (id) => {
    setBeyArray(updateArray(id));
  };

  return (
    <div className="card" onClick={() => findAndChange(id)}>
      <img src={img} alt="beyonce" />

      <h3>{(id, img, favorite, name)} </h3>
    </div>
  );
};

export default BeyCard;
