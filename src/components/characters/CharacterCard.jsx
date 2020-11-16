import React from "react";
import CharacterItem from "./CharacterItem";

const CharacterCard = ({ item, isLoading }) => {
  console.log(item.name);
  return isLoading ? (
    <h1>Loading...</h1>
  ) : item.id ? (
    <section>
      <CharacterItem key={item.id} item={item} />
    </section>
  ) : (
    <CharacterItem key={item.id} item={null} />
  );
};

export default CharacterCard;
