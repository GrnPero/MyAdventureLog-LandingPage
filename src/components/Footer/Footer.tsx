import React from "react";
import * as Styles from "./Footer.module.css";
import Logo from "../../../static/images/footer_logo.svg";
import Chevron from "../../../static/images/chevron.svg";
import { useState } from "react";

const Footer = () => {
  const [chevronRotated, setChevronRotated] = useState<Array<Boolean>>([
    false,
    false,
    false,
  ]);

  const toggleChevron = (index: number) => {
    const updatedRotations = [...chevronRotated];
    updatedRotations[index] = !updatedRotations[index];
    setChevronRotated(updatedRotations);
  };

  return (
    <footer className={Styles.background}>
      <div className={`${Styles.container}`}>
        <div className={`${Styles.header}`}>
          <img src={Logo} alt="Logo" className={Styles.logo} />
          <p className={Styles.footerP}>
            MyAdventureLog, the ultimate companion for capturing and reliving
            your most memorable moments.
          </p>
        </div>
        <div className={Styles.headerContainer}>
          <div
            onClick={() => {
              toggleChevron(0);
            }}
            className={Styles.collapsibleHeader}
          >
            <h1 className={Styles.footerHeader}>Link</h1>
            <svg
              onClick={() => toggleChevron(0)}
              className={`${Styles.svg} ${
                chevronRotated[0] ? Styles.rotated : ""
              }`}
            >
              <path
                d="M1.86987 1.27802L8.52796 8.89325C8.9264 9.34897 9.63519 9.34897 10.0336 8.89325L16.6916 1.27802"
                stroke="#EC6508"
                stroke-width="2"
                stroke-linecap="round"
                fill="none"
              />
            </svg>
          </div>
          <div className={Styles.pFooterContainer}>
            {chevronRotated[0] ? (
              <>
                <ul className={`${Styles.list}`}>
                  <li>
                    <a href="#" className={Styles.pFooter}>
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" className={Styles.pFooter}>
                      Key Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className={Styles.pFooter}>
                      Avatar
                    </a>
                  </li>
                </ul>
              </>
            ) : null}
          </div>
          <div
            onClick={() => toggleChevron(1)}
            className={Styles.collapsibleHeader}
          >
            <h1 className={Styles.footerHeader}>Company</h1>
            <svg
              className={`${Styles.svg} ${
                chevronRotated[1] ? Styles.rotated : ""
              }`}
            >
              <path
                d="M1.86987 1.27802L8.52796 8.89325C8.9264 9.34897 9.63519 9.34897 10.0336 8.89325L16.6916 1.27802"
                stroke="#EC6508"
                stroke-width="2"
                stroke-linecap="round"
                fill="none"
              />
            </svg>
          </div>
          <div className={Styles.pFooterContainer}>
            {chevronRotated[1] ? (
              <>
                <ul className={`${Styles.list}`}>
                  <li>
                    <a href="#" className={Styles.pFooter}>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className={Styles.pFooter}>
                      Blog Article
                    </a>
                  </li>
                  <li>
                    <a href="#" className={Styles.pFooter}>
                      Contact
                    </a>
                  </li>
                </ul>
              </>
            ) : null}
          </div>
          <div
            onClick={() => {
              toggleChevron(2);
            }}
            className={Styles.collapsibleHeader}
          >
            <h1 className={Styles.footerHeader}>Account</h1>
            <svg
              className={`${Styles.svg} ${
                chevronRotated[2] ? Styles.rotated : ""
              }`}
            >
              <path
                d="M1.86987 1.27802L8.52796 8.89325C8.9264 9.34897 9.63519 9.34897 10.0336 8.89325L16.6916 1.27802"
                stroke="#EC6508"
                stroke-width="2"
                stroke-linecap="round"
                fill="none"
              />
            </svg>
          </div>
          <div className={Styles.pFooterContainer}>
            {chevronRotated[2] ? (
              <>
                <ul className={`${Styles.list}`}>
                  <li>
                    <a href="#" className={Styles.pFooter}>
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className={Styles.pFooter}>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className={Styles.pFooter}>
                      Support
                    </a>
                  </li>
                </ul>
              </>
            ) : null}
          </div>
        </div>
        <span className={`${Styles.copyright} ${Styles.header}`}>
          Copyright &copy;2024 MyAdventureLog
        </span>
      </div>
    </footer>
  );
};

export default Footer;
