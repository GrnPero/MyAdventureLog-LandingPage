import React from "react";
import * as style from "./NavBar.module.css";
import image from "../../static/images/logo.png";

const NavBar: React.FC = () => {
  return (
    <div>
      <a href="#">
        <img src={image} alt="Logo" />
      </a>
      <button className={`${style.button} ${style.button__download}`}>
        Download App
      </button>
    </div>
  );
};

export default NavBar;
