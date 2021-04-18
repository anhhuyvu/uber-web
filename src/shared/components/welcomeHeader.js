import React from "react";
import top_icon from '../../images/Uber.png';
import '../components/Header/header.css';

const WelcomeHeader = () => {
  return (
    <header className="Header">
      <div>
        <img src={top_icon}></img>
      </div>
    </header>
  );
};

export default WelcomeHeader;