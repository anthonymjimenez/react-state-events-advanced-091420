import React from "react";
import "./App.css";
import BeyContainer from './Containers/BeyContainer';
import Favorites from './Containers/Favorites';
import beyArray from './api';

const App = () => {
  
  return (
    <div className="container" >
      <BeyContainer beyArray ={beyArray} />
      <Favorites beyArray={beyArray} />
    </div>
  );
};

export default App;
