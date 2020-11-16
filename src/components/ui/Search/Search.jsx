import React, { useState } from "react";
import Suggestions from "./Suggestions";

const Search = ({ getItemById, item }) => {
  const [text, setText] = useState("");
  const [clicked, setClicked] = useState(true);

  const onChange = (text, clicked) => {
    setClicked(clicked);
    setText(text);

    if (text.length !== 0 && isNaN(text)) {
      getItemById("search/" + text);
    } else if (text.length === 0 && isNaN(text)) {
      getItemById(Math.ceil(Math.random() * 700));
    }

    if (text.length !== 0 && !isNaN(text)) {
      getItemById(text);
    } else if (text.length === 0 && !isNaN(text)) {
      getItemById(Math.ceil(Math.random() * 700));
    }

    if (clicked) {
      setText("");
    }
  };

  return (
    <section className="search">
      <form action="">
        <input
          className="input is-large"
          type="text"
          placeholder="Search characters"
          autoFocus
          value={text}
          onChange={(e) => onChange(e.target.value, false)}
        />
        <Suggestions
          item={item}
          onClick={(e) => onChange(e, true)}
          clicked={clicked}
        />
      </form>
    </section>
  );
};

export default Search;
