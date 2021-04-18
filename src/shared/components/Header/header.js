import React from "react";
import top_icon from '../../../images/Uber.png';
import Dropdown from '../dropdown/dropdown';
import './header.css';

const Header = () => {
  return (
    <header className="Header">
      <div>
        <img src={top_icon}></img>
      </div>
      <div>
        <Dropdown />
      </div>
    </header>
  );
};


export default Header;