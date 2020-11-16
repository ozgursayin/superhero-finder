import React from "react";

const CharacterItem = ({ item }) => {
  return item ? (
    <div className="card">
      <div className="card-image"></div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image ">
              <img src={item.image.url} alt="Placeholder " />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-3">{item.name}</p>
            {Object.entries(item.powerstats).map(([statname, statvalue]) => (
              <h1 className="title is-6" key={statname}>
                {statname} : {statvalue}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="card"></div>
  );
};

export default CharacterItem;
