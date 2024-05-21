import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import './Privacity.css';

const PrivacyPolicy = () => {
  return (
    <>
    <Header />
    <div className="privacy-policy">
      
      <main className="privacy-policy-content">
        <h1>Privacy Policy</h1>
        <p>
          This privacy policy sets out how we use and protect any information
          that you give us when you use this website.
        </p>
        <p>
          We are committed to ensuring that your privacy is protected. Should we
          ask you to provide certain information by which you can be identified
          when using this website, then you can be assured that it will only be
          used in accordance with this privacy policy.
        </p>
        <h2>What we collect</h2>
        <p>
          We may collect the following information:
        </p>
        <ul>
          <li>
            Star Wars Web.
          </li>
          <li>
            Contact: @adonaylorenzo@alumno.ieselrincon.es
          </li>
          <li>
            Just for learning React.
          </li>
          <li>
            This is a project for the subject of Web Development.
          </li>
        </ul>
        <h2>What we do with the information we gather</h2>
        <p>
          We require this information to understand your needs and provide you
          with a better service, and in particular for the following reasons:
        </p>
        <ul>
          <li>
            Internal record keeping.
          </li>
          <li>
            We may use the information to improve our products and services.
          </li>
          <li>
            We may periodically send promotional emails about new products,
            special offers or other information which we think you may find
            interesting using the email address which you have provided.
          </li>
          <li>
            From time to time, we may also use your information to contact you
            for market research purposes. We may contact you by email, phone,
            fax or mail. We may use the information to customise the website
            according to your interests.
          </li>
        </ul>
        <h2>Security</h2>
        <p>
          We are committed to ensuring that your information is secure. In order
          to prevent unauthorised access or disclosure, we have put in place
          suitable physical, electronic and managerial procedures to safeguard
          and secure the information we collect online.
        </p>
        <h2>How we use cookies</h2>
        <p>
          A cookie is a small file which asks permission to be placed on your
          computer's hard drive. Once you agree, the file is added and the cookie
          helps analyse web traffic or lets you know when you visit a particular
          site. Cookies allow web applications to respond to you as an individual.
          The web application can tailor its operations to your needs, likes and
          dislikes by gathering and remembering information about your preferences.
        </p>
        <p>
          We use traffic log cookies to identify which pages are being used. This
          helps us analyse data about web page traffic and improve our website
          in order to tailor it to customer needs. We only use this information
          for statistical analysis purposes and then the data is removed from the
          system.
        </p>
        <p>
          Overall, cookies help us provide you with a better website, by enabling
          us to monitor which pages you find useful and which you do not. A cookie
          in no way gives us access to your computer or any information about you,
          other than the data you choose to share with us.
        </p>
        <p>
          You can choose to accept or decline cookies. Most web browsers
          automatically accept cookies, but you can usually modify your browser
          setting to decline cookies if you prefer. This may prevent you from
          taking full advantage of the website.
        </p>
        <h2>Links to other websites</h2>
        <p>
          Our website may contain links to other websites of interest. However,
          once you have used these links to leave our site, you should note that
          we do not have any control over that other website. Therefore, we
        </p>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default PrivacyPolicy;