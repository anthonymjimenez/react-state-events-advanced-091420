import React from "react";

const Container = ({ cssName, h1Name, generateCards }) => {
 
  return (
    <div className={`${cssName}`}>
      <h1>{h1Name}</h1>
      {generateCards()}
    </div>
  );
};

export default Container;
