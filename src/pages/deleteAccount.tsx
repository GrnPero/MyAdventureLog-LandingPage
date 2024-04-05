import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import * as Styles from "../components/DeleteAccount/DeleteAccount.module.css";
import { useEffect } from "react";

const DeleteAccount: React.FC<PageProps> = () => {
  useEffect(() => {
    // Scroll to a specific section on page load
    const scrollToSection = () => {
      const sectionId = "delete-account"; // Change this to the desired section id
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView();
      }
    };

    scrollToSection(); // Call the function on component mount
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <Layout>
      <main id="delete-account" className={Styles.background}>
        <div className={Styles.container}>
          <h1 className={Styles.heading}>Account Deletion</h1>
          <h2 className={Styles.subheading}>
            Deleting Your MyAdventureLog Account
          </h2>
          <p className={Styles.text}>
            Thank you for being a part of MyAdventureLog. If you wish to delete
            your account, you can do so using one of the following methods:
          </p>

          <h2 className={Styles.subheading}>
            1. Delete Within the MyAdventureLog App:
          </h2>
          <ul className={Styles.text}>
            <li>Open the MyAdventureLog app on your device.</li>
            <li>Navigate to the settings and click on Manage Account</li>
            <li>Look for the option to delete your account.</li>
            <li>
              Follow the on-screen prompts to initiate the deletion process.
            </li>
            <li>
              Please note that it may take approximately 1 week to complete the
              deletion. During this time, you have the option to cancel the
              deletion if you change your mind.
            </li>
          </ul>

          <h2 className={Styles.subheading}>2. Email Us:</h2>
          <ul className={Styles.text}>
            <li>
              If you prefer, you can also request the deletion of your account
              by sending an email to app.myadventurelog@gmail.com.
            </li>
            <li>
              Please include your registered email address in the email for
              verification purposes.
            </li>
          </ul>

          <h2 className={Styles.subheading}>Data Deletion</h2>
          <p className={Styles.text}>
            When you delete your MyAdventureLog account, all associated data
            will be immediately and permanently deleted within a week. This
            includes:
          </p>
          <ul className={Styles.text}>
            <li>Your user profile information</li>
            <li>All your logs</li>
            <li>Any other personal data associated with your account</li>
          </ul>

          <h2 className={Styles.subheading}>
            We will retain certain data for a limited period, including:
          </h2>
          <ul className={Styles.text}>
            <li>Your user profile information</li>
            <li>All your logs</li>
            <li>Any other personal data associated with your account</li>
          </ul>
          <p className={Styles.text}>
            For any further inquiries or assistance regarding your account
            deletion, please feel free to contact us at
            app.myadventurelog@gmail.com.
          </p>
          <p className={Styles.text}>
            Note: This information is also available on our Google Play Store
            listing.
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default DeleteAccount;

export const Head: HeadFC = () => <title>Delete Account</title>;
