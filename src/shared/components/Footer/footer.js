import React from "react";
import './footer.css';

const Footer = () => {
  return (
    <footer className="foot">
      <div className="foot-content">
        <p>© 2019 Uber Technologies Inc. All Rights Reserved.</p>
        <p>Terms of Use | Legal Notices | Privacy & Security</p>
      </div>
      <div>
        <i className="fa fa-facebook-square" style={{ color: "bue" }}></i>
        <i className="fa fa-youtube" style={{ color: "crimson" }}></i>
        <i className="fa fa-linkedin" style={{ color: "darkcyan" }}></i>
      </div>
    </footer>
  );
};

export default Footer;
