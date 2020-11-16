import React, { useState, useEffect } from "react";
import CharacterCard from "./components/characters/CharacterCard";
import Search from "./components/ui/Search/Search";
import "./App.css";
import Header from "./components/ui/Header";

//console.log(process.env.REACT_APP_SUPERHERO_API_KEY);
const BASE_URL = "https://superheroapi.com/api.php/";
const App = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [charId, setCharId] = useState(Math.ceil(Math.random() * 700));

  useEffect(() => {
    fetch(`${BASE_URL}${process.env.REACT_APP_SUPERHERO_API_KEY}/${charId}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
    setIsLoading(false);
  }, [charId]);

  if (!item.results) {
    return (
      <div className="container">
        <Header />
        <Search getItemById={(q) => setCharId(q)} item={item} />
        <br />

        <CharacterCard isLoading={isLoading} item={item} />
      </div>
    );
  } else {
    return (
      <div className="container">
        <Header />
        <Search getItemById={(q) => setCharId(q)} item={item} />
        <br />

        <CharacterCard isLoading={isLoading} item={item.results[0]} />
      </div>
    );
  }
};

export default App;
