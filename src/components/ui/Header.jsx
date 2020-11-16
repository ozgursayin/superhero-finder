import React from "react";
import logo from "../../img/superheroBG5.png";

const Header = () => {
  return (
    <div className="columns is-flex is-centered">
      <figure className="image is-128x128">
        <img src={logo} alt="logo" />
      </figure>
    </div>
  );
};

export default Header;
