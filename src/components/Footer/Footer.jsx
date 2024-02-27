import React from "react";
import "./Footer.scss";
import DownArrow from "../../assets/down-arrow.png";

function Footer() {
  return (
    <div className="footer">
      <div className="container1">
        <h4>CATEGORIES</h4>
        <ul>
          <li>Web Builder</li>
          <li>Hosting</li>
          <li>Data Center</li>
          <li>Robotic-Automation</li>
        </ul>
      </div>

      <div className="container2">
        <h4>CONTACT</h4>
        <ul>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms Of Service</li>
          <li>Categories</li>
          <li>About</li>
        </ul>
      </div>

      <div className="container3">
        <p className="country-name">United States</p>
        <img className="arrow" src={DownArrow} />
      </div>
    </div>
  );
}

export default Footer;
