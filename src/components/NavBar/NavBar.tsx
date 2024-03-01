import React from "react";
import * as style from "./NavBar.module.css";
import image from "../../../static/images/logo.png";

const NavBar: React.FC = () => {
  return (
    <nav className={style.nav}>
      <a href="#">
        <img className={style.logo} src={image} alt="Logo" />
      </a>
      <div className={style.container}>
        <button className={`${style.button} ${style.button__download}`}>
          Download App
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
