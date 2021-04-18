import React from "react";

import Footer from "../../shared/components/Footer/footer";
import WelcomeHeader from '../../shared/components/welcomeHeader';
import "./welcomePage.css";
import LinktoRegister from '../../components/Nav/LinktoRegister';
const Body = () => {
  return (
    <div className="Body">
      <p className="title" style={{ fontSize: "25px" }}>
        Your ride, on demand
      </p>
      <p className="Convey">
        Whether you are headed to work, the airport,or out on the town. Uber
        connect your with the reliable ride in minutes. One tap and a car comes
        direct to you.
      </p>
      <LinktoRegister/>
    </div>
  );
};

const WelcomePage = () => {
  return (
    <>
      <WelcomeHeader />
      <Body />
      <Footer />
    </>
  );
};

export default WelcomePage;
