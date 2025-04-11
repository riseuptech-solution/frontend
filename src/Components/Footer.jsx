import React from 'react';
import '../css/footer.css'; // Importing the CSS file
const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src="logo.png" alt="Logo" /> {/* Replace with your actual logo path */}
      </div>
      <div className="footer-text">Thank you for visiting!</div>
      <button className="contact-button">Contact Us</button>
    </footer>
  );
};

export default Footer;
