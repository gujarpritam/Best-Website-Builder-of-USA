import React from "react";
import "./Navbar.scss";
import SearchIcon from "../../assets/search-icon.png";

function Navbar() {
  return (
    <div className="container">
      <div className="innerContainer">
        <div className="inputBox">
          <img className="nav-search" src={SearchIcon} />
          <input className="nav-input" />
        </div>
        <div className="nav-elements">Categories</div>
        <div className="nav-elements">Website Builders</div>
        <div className="nav-elements">Today's Deals</div>
      </div>
    </div>
  );
}

export default Navbar;
