import React, { useState } from "react";
import "./App.css";
import BeyContainer from "./Containers/BeyContainer";
import Favorites from "./Containers/Favorites";
import beyArray from "./api";
import BeyCard from "./Components/BeyCard";
import Container from "./Containers/Container";

const App = () => {
  const [beyonceArray, setBeyArray] = useState(beyArray);

  const toggleFavorites = (bool, id) => {
    setBeyArray((currentArray) => {
      return currentArray.map((elm) =>
        elm.id === id ? { ...elm, favorite: bool } : elm
      );
    });
  };

  const addFavorites = (id) => toggleFavorites(true, id);

  const removeFavorites = (id) => {
    window.alert("I've got hot sauce in my bag");
    toggleFavorites(false, id);
  };
  const filterCards = () =>
    beyonceArray.filter(({ favorite }) => favorite === true);

  const generateCards = (array, callback) =>
    array.map((beyObj) => (
      <BeyCard
        key={beyObj.id}
        beyObj={beyObj}
        eventHandler={() => callback(beyObj.id)}
      />
    ));

  return (
    <div className="container">
      <Container
        h1name="Index"
        cssName="index"
        generateCards={() => generateCards(beyonceArray, addFavorites)}
      />
      
      <Container
        h1name="Favorite"
        cssName="favorites"
        generateCards={() => generateCards(filterCards(), removeFavorites)}
      />
    </div>
  );
};

export default App;
