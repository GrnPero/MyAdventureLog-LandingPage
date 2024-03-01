import React from "react";
import NavBar from "../NavBar/NavBar";
import * as styles from "./Header.module.css";
import GooglePlay from "../../../static/images/Google_Play-Badge-Logo.svg";
import IPhone from "../../../static/images/iPhone.png";

const Header = () => {
  return (
    <div className={styles.background}>
      <NavBar />
      <h1>
        Welcome <div className={styles.header__special}>to</div> MyAdventureLog
      </h1>
      <p>Your Personal Journey Tracker</p>
      <div className={styles.container}>
        <img
          src={GooglePlay}
          alt="Google Play Logo"
          className={styles.googleplay}
        />
      </div>
      <div className={styles.container}>
        <img src={IPhone} alt="IPhone" className={styles.iphone} />
      </div>
    </div>
  );
};

export default Header;
