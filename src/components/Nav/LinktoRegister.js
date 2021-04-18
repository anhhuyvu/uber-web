import React from "react";
import { NavLink } from "react-router-dom";
import './navLink.css';

const LinktoRegister = (props) => {
  return (
    <button className="regis-button">
      <NavLink className ="nav" to="/regis">
          <p>Register with phone </p>
          <i className="fa fa-arrow-right" style={{ fontSize: "20px" }}></i>
      </NavLink>
    </button>
  );
};
export default LinktoRegister;
