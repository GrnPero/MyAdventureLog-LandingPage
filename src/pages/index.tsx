import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import * as introductionStyles from "../components/Introduction/Introduction.module.css";
import GooglePlay from "../../static/images/Google_Play-Badge-Logo.svg";
import iPhone from "../../static/images/IntroductioniPhone.png";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <section
        className={`${introductionStyles.container}
          ${introductionStyles.grid}
          ${introductionStyles.block}
          ${introductionStyles.gridOneTwo}`}
      >
        <div className={introductionStyles.headerContainer}>
          <h1 className={introductionStyles.altHeading}>
            Embark on Your Personal Adventure with MyAdventureLog
          </h1>
          <p className={introductionStyles.headingText}>
            Welcome to MyAdventureLog, the ultimate companion for capturing and
            reliving your most memorable moments. Our app is designed to empower
            you to chronicle your journeys, big or small, with ease and style.
          </p>
          <div
            className={`${introductionStyles.imageContainer} ${introductionStyles.googlePlayContainer}`}
          >
            <img
              src={GooglePlay}
              alt="Get it on the Google Play store"
              className={introductionStyles.playStore}
            />
          </div>
        </div>
        <div
          className={`${introductionStyles.imageContainer} ${introductionStyles.imageOrder}`}
        >
          <img
            src={iPhone}
            alt="iPhone running the app"
            className={introductionStyles.iphone}
          />
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
