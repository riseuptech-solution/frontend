import React from 'react';
import "../css/header.css"
const Header = () => {
  return (
    <header className="header">
          <div className="logo">
            <img src="logo.png" alt="Logo" /> {/* Replace with your actual logo path */}
          </div>
          <div className="welcome-text">Welcome</div>
          <button className="login-button">Login</button>
    </header>
  );
};

export default Header;
