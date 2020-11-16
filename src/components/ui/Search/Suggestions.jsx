import React from "react";

const Suggestions = ({ item, onClick, clicked }) => {
  let options = null;

  if (!clicked) {
    options = item.results ? (
      item.results.map(
        (result, i) =>
          i < 500 && (
            <li key={result.id}>
              <section
                onClick={(e) => {
                  onClick(result.name);
                }}
              >
                {result.name}
              </section>
            </li>
          )
      )
    ) : (
      <div></div>
    );
  }

  return <ul className="suggestion">{options}</ul>;
};

export default Suggestions;
