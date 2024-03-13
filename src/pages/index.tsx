import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import * as introductionStyles from "../components/Introduction/Introduction.module.css";
import * as featureStyles from "../components/Feature/Feature.module.css";
import * as characterStyles from "../components/Character/Character.module.css";
import GooglePlay from "../../static/images/Google_Play-Badge-Logo.svg";
import iPhone from "../../static/images/IntroductioniPhone.png";
import Marker from "../../static/images/marker.svg";
import Globe from "../../static/images/globe.svg";
import GoogleMap from "../../static/images/google map.svg";
import MaleKnight from "../../static/images/male_knight_walking.gif";
import FemaleKnight from "../../static/images/female_knight_walking.gif";

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
      <section className={`${featureStyles.background}`}>
        <div className={`${featureStyles.container} ${featureStyles.grid}`}>
          <div
            className={`${featureStyles.gridOneTwo} ${featureStyles.heading} `}
          >
            <h1 className={featureStyles.headingText}>Key features</h1>
            <p
              className={` ${featureStyles.featureP} ${featureStyles.featurePHeading}`}
            >
              MyAdventureLog, the ultimate companion for capturing and reliving
              your most memorable moments.
            </p>
            <div className={featureStyles.googlePlayContainer}>
              <img
                src={GooglePlay}
                alt="Get on Google Play"
                className={featureStyles.googlePlay}
              />
            </div>
          </div>
          <div className={featureStyles.gridOneTwo}>
            <div className={featureStyles.featureContainer}>
              <div
                className={`${featureStyles.feature} ${featureStyles.gridFeature}`}
              >
                <div className={featureStyles.desktop}>
                  <img
                    src={Marker}
                    alt="Marker"
                    className={featureStyles.icon}
                  />
                </div>
                <div>
                  <h1
                    className={`${featureStyles.featureText} ${featureStyles.featureHeader}`}
                  >
                    Location Tracking
                  </h1>
                  <p
                    className={`${featureStyles.featureText} ${featureStyles.featureP}`}
                  >
                    Users can save their current location with just a tap.
                  </p>
                </div>
              </div>
              <div>
                <div
                  className={`${featureStyles.feature} ${featureStyles.gridFeature}`}
                >
                  <div className={featureStyles.desktop}>
                    <img
                      src={Globe}
                      alt="Marker"
                      className={featureStyles.icon}
                    />
                  </div>
                  <div>
                    <h1
                      className={`${featureStyles.featureText} ${featureStyles.featureHeader}`}
                    >
                      Personalized Logs
                    </h1>
                    <p
                      className={`${featureStyles.featureText} ${featureStyles.featureP}`}
                    >
                      Write detailed logs about activities, memories, or
                      thoughts associated with each location.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className={`${featureStyles.feature} ${featureStyles.gridFeature}`}
                >
                  <div className={featureStyles.desktop}>
                    <img
                      src={GoogleMap}
                      alt="Marker"
                      className={featureStyles.icon}
                    />
                  </div>
                  <div>
                    <h1
                      className={`${featureStyles.featureText} ${featureStyles.featureHeader}`}
                    >
                      Interactive Map
                    </h1>
                    <p
                      className={`${featureStyles.featureText} ${featureStyles.featureP}`}
                    >
                      View all saved locations as markers on Google Maps for
                      easy navigation and reminiscing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={characterStyles.background}>
        <div className={characterStyles.container}>
          <div>
            <h1 className={characterStyles.characterHeader}>
              Choose Your Avatar
            </h1>
            <p className={characterStyles.characterP}>
              MyAdventureLog, the ultimate companion for capturing and reliving
              your most memorable moments.
            </p>
          </div>
          <div className={characterStyles.grid}>
            <div className={characterStyles.characterCard}>
              <div className={characterStyles.characterContainer}>
                <img
                  src={MaleKnight}
                  alt="16 Bit Knight Walking"
                  className={characterStyles.character}
                />
              </div>
            </div>
            <div className={characterStyles.characterCard}>
              <div className={characterStyles.characterContainer}>
                <img
                  src={FemaleKnight}
                  alt="16 Bit Knight Walking"
                  className={characterStyles.character}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
