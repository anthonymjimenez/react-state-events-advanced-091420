import React, { useState } from "react";
import "./App.css";
import BeyContainer from "./Containers/BeyContainer";
import Favorites from "./Containers/Favorites";
import beyArray from "./api";

const App = () => {
  
  const [beyonceArray, setBeyArray] = useState(beyArray);

  return (
    <div className="container">
      <BeyContainer beyArray={beyonceArray} setBeyArray={setBeyArray} />
      <Favorites beyArray={beyonceArray} setBeyArray={setBeyArray} />
    </div>
  );
};

export default App;
