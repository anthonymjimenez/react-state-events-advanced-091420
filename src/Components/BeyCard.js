import React from "react";

const BeyCard = ({
  beyObj: { id, name, img, favorite },
  beyArray,
  setBeyArray,
  isIndexPage,
}) => {
  
  const findAndChange = (id) => {
    //ignore and return all objects that are NOT associated with event handler
    // ignore and return all favorite=true objects that are clicked from index page
    setBeyArray((beyArray) =>
      beyArray.map((beyObj) =>
        beyObj.id !== id ||
        (beyObj.favorite === true && isIndexPage(beyObj) === true)
          ? beyObj
          : {
              ...beyObj,
              favorite: !beyObj.favorite,
            }
      )
    );
  };

  return (
    <div className="card" onClick={() => findAndChange(id)}>
      <img src={img} alt="beyonce" />

      <h3>{name} </h3>
    </div>
  );
};
export default BeyCard;
