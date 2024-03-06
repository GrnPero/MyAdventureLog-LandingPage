import React from "react";
import NavBar from "../NavBar/NavBar";
import * as styles from "./Header.module.css";
import GooglePlay from "../../../static/images/Google_Play-Badge-Logo.svg";
import IPhone from "../../../static/images/iphone_desktop.png";

const Header = () => {
  return (
    <div className={styles.background}>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.header__hero}>
            <h1>
              Welcome <div className={styles.header__special}>to</div>{" "}
              MyAdventureLog
            </h1>
            <p>Your Personal Journey Tracker</p>
            <div className={styles.containerImage}>
              <img
                src={GooglePlay}
                alt="Google Play Logo"
                className={styles.googleplay}
              />
            </div>
          </div>
          <div className={styles.header__iphone}>
            <div className={styles.containerImage}>
              <img src={IPhone} alt="IPhone" className={styles.iphone} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
