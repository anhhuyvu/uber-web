import React from "react";

import Header from "../../shared/components/Header/header";
import Footer from "../../shared/components/Footer/footer";
import SignUpForm from "./CheckoutPage";


const registerPage = () => {
  return (
    <>
      <Header />
      <div className="form">
        <SignUpForm />
      </div>
      <Footer />
    </>
  );
};
export default registerPage;
