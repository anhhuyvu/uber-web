import React from "react";
import { NavLink } from "react-router-dom";
import "./navLink.css";

const Booklink = (props) => {
  return (
    <NavLink className="booklink" to="/map">
      <i className="fa fa-arrow-right" style={{ fontSize: "20px" }}></i>
    </NavLink>
  );
};
export default Booklink;
