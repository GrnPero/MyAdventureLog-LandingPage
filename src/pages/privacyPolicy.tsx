import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import * as Styles from "../components/PrivacyPolicy/PrivacyPolicy.module.css";
import { useEffect } from "react";

const PrivacyPolicy: React.FC<PageProps> = () => {
  useEffect(() => {
    // Scroll to a specific section on page load
    const scrollToSection = () => {
      const sectionId = "privacy-policy"; // Change this to the desired section id
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView();
      }
    };

    scrollToSection(); // Call the function on component mount
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <Layout>
      <main id="privacy-policy" className={Styles.background}>
        <div className={Styles.container}>
          <h1 className={Styles.heading}>MyAdventureLog Privacy Policy</h1>
          <p className={Styles.text}>Last updated: March 27, 2024</p>
          <p className={Styles.text}>
            This Privacy Policy describes how MyAdventureLog (the "Site", "we",
            "us", or "our") collects, uses, and discloses your personal
            information when you visit, use our services, or make a purchase
            from https://myadventurelog.app (the "Site") or otherwise
            communicate with us (collectively, the "Services"). For purposes of
            this Privacy Policy, "you" and "your" means you as the user of the
            Services, whether you are a customer, website visitor, or another
            individual whose information we have collected pursuant to this
            Privacy Policy. Please read this Privacy Policy carefully. By using
            and accessing any of the Services, you agree to the collection, use,
            and disclosure of your information as described in this Privacy
            Policy. If you do not agree to this Privacy Policy, please do not
            use or access any of the Services.
          </p>
          <h2 className={Styles.subheading}>Changes to This Privacy Policy </h2>
          <p className={Styles.text}>
            We may update this Privacy Policy from time to time, including to
            reflect changes to our practices or for other operational, legal, or
            regulatory reasons. We will post the revised Privacy Policy on the
            Site, update the "Last updated" date and take any other steps
            required by applicable law.
          </p>
          <h2 className={Styles.subheading}>
            How We Collect and Use Your Personal Information
          </h2>
          <p className={Styles.text}>
            To provide the Services, we collect and have collected over the past
            12 months personal information about you from a variety of sources,
            as set out below. The information that we collect and use varies
            depending on how you interact with us. In addition to the specific
            uses set out below, we may use information we collect about you to
            communicate with you, provide the Services, comply with any
            applicable legal obligations, enforce any applicable terms of
            service, and to protect or defend the Services, our rights, and the
            rights of our users or others.
          </p>
          <h2 className={Styles.subheading}>
            What Personal Information We Collect{" "}
          </h2>
          <p className={Styles.text}>
            The types of personal information we obtain about you depends on how
            you interact with our Site and use our Services. When we use the
            term "personal information", we are referring to information that
            identifies, relates to, describes or can be associated with you. The
            following sections describe the categories and specific types of
            personal information we collect.
          </p>
          <h2 className={Styles.subheading}>
            Information We Collect Directly from You{" "}
          </h2>
          <p className={Styles.text}>
            Information that you directly submit to us through our Services may
            include: - Basic contact details including your name, address, phone
            number, email. - Order information including your name, billing
            address, shipping address, payment confirmation, email address,
            phone number. - Account information including your username,
            password, security questions. - Shopping information including the
            items you view, put in your cart or add to your wishlist. - Customer
            support information including the information you choose to include
            in communications with us, for example, when sending a message
            through the Services. Some features of the Services may require you
            to directly provide us with certain information about yourself. You
            may elect not to provide this information, but doing so may prevent
            you from using or accessing these features.
          </p>
          <h2 className={Styles.subheading}>
            Information We Collect through Cookies{" "}
          </h2>
          <p className={Styles.text}>
            We also automatically collect certain information about your
            interaction with the Services ("Usage Data"). To do this, we may use
            cookies, pixels and similar technologies ("Cookies"). Usage Data may
            include information about how you access and use our Site and your
            account, including device information, browser information,
            information about your network connection, your IP address and other
            information regarding your interaction with the Services.
          </p>
          <h2 className={Styles.subheading}>
            Information We Obtain from Third Parties
          </h2>
          <p className={Styles.text}>
            Finally, we may obtain information about you from third parties,
            including from vendors and service providers who may collect
            information on our behalf, such as:{" "}
          </p>
          <p className={Styles.text}>
            - Companies who support our Site and Services, such as Shopify.
          </p>
          <p className={Styles.text}>
            - Our payment processors, who collect payment information (e.g.,
            bank account, credit or debit card information, billing address) to
            process your payment in order to fulfill your orders and provide you
            with products or services you have requested, in order to perform
            our contract with you.{" "}
          </p>{" "}
          <p className={Styles.text}>
            - When you visit our Site, open or click on emails we send you, or
            interact with our Services or advertisements, we, or third parties
            we work with, may automatically collect certain information using
            online tracking technologies such as pixels, web beacons, software
            developer kits, third-party libraries, and cookies.{" "}
          </p>{" "}
          <p className={Styles.text}>
            Any information we obtain from third parties will be treated in
            accordance with this Privacy Policy. We are not responsible or
            liable for the accuracy of the information provided to us by third
            parties and are not responsible for any third party's policies or
            practices. For more information, see the section below, Third Party
            Websites and Links.
          </p>
          <h2 className={Styles.subheading}>
            How We Use Your Personal Information
          </h2>
          <p className={Styles.text}>
            - Providing Products and Services. We use your personal information
            to provide you with the Services in order to perform our contract
            with you, including to process your payments, fulfill your orders,
            to send notifications to you related to you account, purchases,
            returns, exchanges or other transactions, to create, maintain and
            otherwise manage your account, to arrange for shipping, facilitate
            any returns and exchanges and to enable you to post reviews.
          </p>
          <p className={Styles.text}>
            - Marketing and Advertising. We use your personal information for
            marketing and promotional purposes, such as to send marketing,
            advertising and promotional communications by email, text message or
            postal mail, and to show you advertisements for products or
            services. This may include using your personal information to better
            tailor the Services and advertising on our Site and other websites.
          </p>
          <p className={Styles.text}>
            - Security and Fraud Prevention. We use your personal information to
            detect, investigate or take action regarding possible fraudulent,
            illegal or malicious activity. If you choose to use the Services and
            register an account, you are responsible for keeping your account
            credentials safe. We highly recommend that you do not share your
            username, password, or other access details with anyone else. If you
            believe your account has been compromised, please contact us
            immediately.
          </p>
          <p className={Styles.text}>
            - Communicating with you. We use your personal information to
            provide you with customer support and improve our Services. This is
            in our legitimate interests in order to be responsive to you, to
            provide effective services to you, and to maintain our business
            relationship with you.
          </p>
          <h2 className={Styles.subheading}>Cookies</h2>
          <p className={Styles.text}>
            Like many websites, we use Cookies on our Site. For specific
            information about the Cookies that we use related to powering our
            store with Shopify, see https://www.shopify.com/legal/cookies. We
            use Cookies to power and improve our Site and our Services
            (including to remember your actions and preferences), to run
            analytics and better understand user interaction with the Services
            (in our legitimate interests to administer, improve and optimize the
            Services). We may also permit third parties and services providers
            to use Cookies on our Site to better tailor the services, products
            and advertising on our Site and other websites. Most browsers
            automatically accept Cookies by default, but you can choose to set
            your browser to remove or reject Cookies through your browser
            controls. Please keep in mind that removing or blocking Cookies can
            negatively impact your user experience and may cause some of the
            Services, including certain features and general functionality, to
            work incorrectly or no longer be available. Additionally, blocking
            Cookies may not completely prevent how we share information with
            third parties such as our advertising partners.
          </p>
          <h2 className={Styles.subheading}>
            How We Disclose Personal Information{" "}
          </h2>
          <p className={Styles.text}>
            In certain circumstances, we may disclose your personal information
            to third parties for legitimate purposes subject to this Privacy
            Policy. Such circumstances may include:
          </p>
          <p className={Styles.text}>
            - With vendors or other third parties who perform services on our
            behalf (e.g., IT management, payment processing, data analytics,
            customer support, cloud storage, fulfillment and shipping).
          </p>
          <p className={Styles.text}>
            - With business and marketing partners, including Shopify, to
            provide services and advertise to you. Our business and marketing
            partners will use your information in accordance with their own
            privacy notices.
          </p>
          <p className={Styles.text}>
            - When you direct, request us or otherwise consent to our disclosure
            of certain information to third parties, such as to ship you
            products or through your use of social media widgets or login
            integrations, with your consent.
          </p>
          <p className={Styles.text}>
            - With our affiliates or otherwise within our corporate group, in
            our legitimate interests to run a successful business.
          </p>{" "}
          <p className={Styles.text}>
            - In connection with a business transaction such as a merger or
            bankruptcy, to comply with any applicable legal obligations
            (including to respond to subpoenas, search warrants and similar
            requests), to enforce any applicable terms of service, and to
            protect or defend the Services, our rights, and the rights of our
            users or others.
          </p>
          <p className={Styles.text}>
            We have, in the past 12 months disclosed the following categories of
            personal information and sensitive personal information (denoted by
            *) about users for the purposes set out above in "How we Collect and
            Use your Personal Information" and "How we Disclose Personal
            Information":
          </p>
          <p className={Styles.text}>Category:</p>
          <p className={Styles.text}>
            - Identifiers such as basic contact details and certain order and
            account information
          </p>
          <p className={Styles.text}>
            - Commercial information such as order information, shopping
            information and customer support information
          </p>
          <p className={Styles.text}>
            - Internet or other similar network activity, such as Usage Data
          </p>
          <p className={Styles.text}>Categories of Recipients:</p>
          <p className={Styles.text}>
            - Vendors and third parties who perform services on our behalf (such
            as Internet service providers, payment processors, fulfillment
            partners, customer support partners and data analytics providers)
          </p>
          <p className={Styles.text}>- Business and marketing partners</p>
          <p className={Styles.text}>- Affiliates</p>
          <p className={Styles.text}>
            We do not use or disclose sensitive personal information for the
            purposes of inferring characteristics about you.{" "}
          </p>
          <h2 className={Styles.subheading}>User Generated Content</h2>
          <p className={Styles.text}>
            The Services may enable you to post product reviews and other
            user-generated content. If you choose to submit user generated
            content to any public area of the Services, this content will be
            public and accessible by anyone.
          </p>{" "}
          <p className={Styles.text}>
            We do not control who will have access to the information that you
            choose to make available to others, and cannot ensure that parties
            who have access to such information will respect your privacy or
            keep it secure. We are not responsible for the privacy or security
            of any information that you make publicly available, or for the
            accuracy, use or misuse of any information that you disclose or
            receive from third parties.
          </p>{" "}
          <h2 className={Styles.subheading}>Third Party Websites and Links</h2>
          <p className={Styles.text}>
            Our Site may provide links to websites or other online platforms
            operated by third parties. If you follow links to sites not
            affiliated or controlled by us, you should review their privacy and
            security policies and other terms and conditions. We do not
            guarantee and are not responsible for the privacy or security of
            such sites, including the accuracy, completeness, or reliability of
            information found on these sites. Information you provide on public
            or semi-public venues, including information you share on
            third-party social networking platforms may also be viewable by
            other users of the Services and/or users of those third-party
            platforms without limitation as to its use by us or by a third
            party. Our inclusion of such links does not, by itself, imply any
            endorsement of the content on such platforms or of their owners or
            operators, except as disclosed on the Services.{" "}
          </p>{" "}
          <h2 className={Styles.subheading}>Children's Data </h2>
          <p className={Styles.text}>
            The Services are not intended to be used by children, and we do not
            knowingly collect any personal information about children. If you
            are the parent or guardian of a child who has provided us with their
            personal information, you may contact us using the contact details
            set out below to request that it be deleted.
          </p>{" "}
          <p className={Styles.text}>
            As of the Effective Date of this Privacy Policy, we do not have
            actual knowledge that we "share" or "sell" (as those terms are
            defined in applicable law) personal information of individuals under
            16 years of age.{" "}
          </p>
          <h2 className={Styles.subheading}>
            Security and Retention of Your Information
          </h2>
          <p className={Styles.text}>
            Please be aware that no security measures are perfect or
            impenetrable, and we cannot guarantee "perfect security." In
            addition, any information you send to us may not be secure while in
            transit. We recommend that you do not use unsecure channels to
            communicate sensitive or confidential information to us.
          </p>
          <p className={Styles.text}>
            How long we retain your personal information depends on different
            factors, such as whether we need the information to maintain your
            account, to provide the Services, comply with legal obligations,
            resolve disputes or enforce other applicable contracts and policies.
          </p>
          <h2 className={Styles.subheading}>Your Rights and Choices </h2>{" "}
          <p className={Styles.text}>
            Depending on where you live, you may have some or all of the rights
            listed below in relation to your personal information. However,
            these rights are not absolute, may apply only in certain
            circumstances and, in certain cases, we may decline your request as
            permitted by law.
          </p>
          <p className={Styles.text}>
            - Right to Access / Know. You may have a right to request access to
            personal information that we hold about you, including details
            relating to the ways in which we use and share your information.
          </p>
          <p className={Styles.text}>
            - Right to Delete. You may have a right to request that we delete
            personal information we maintain about you.
          </p>
          <p className={Styles.text}>
            - Right to Correct. You may have a right to request that we correct
            inaccurate personal information we maintain about you.
          </p>
          <p className={Styles.text}>
            - Right of Portability. You may have a right to receive a copy of
            the personal information we hold about you and to request that we
            transfer it to a third party, in certain circumstances and with
            certain exceptions.{" "}
          </p>{" "}
          <h2 className={Styles.subheading}>Complaints</h2>
          <p className={Styles.text}>
            If you have complaints about how we process your personal
            information, please contact us using the contact details provided
            below. If you are not satisfied with our response to your complaint,
            depending on where you live you may have the right to appeal our
            decision by contacting us using the contact details set out below,
            or lodge your complaint with your local data protection authority.{" "}
          </p>
          <h2 className={Styles.subheading}>International Users </h2>
          <p className={Styles.text}>
            Please note that we may transfer, store and process your personal
            information outside the country you live in, including the United
            States. Your personal information is also processed by staff and
            third party service providers and partners in these countries. If we
            transfer your personal information out of Europe, we will rely on
            recognized transfer mechanisms like the European Commission's
            Standard Contractual Clauses, or any equivalent contracts issued by
            the relevant competent authority of the UK, as relevant, unless the
            data transfer is to a country that has been determined to provide an
            adequate level of protection.
          </p>
          <h2 className={Styles.subheading}>Contact</h2>
          <p className={Styles.text}>
            Should you have any questions about our privacy practices or this
            Privacy Policy, or if you would like to exercise any of the rights
            available to you, please email us at app.myadventurelog@gmail.com.
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default PrivacyPolicy;

export const Head: HeadFC = () => <title>Privacy Policy</title>;
