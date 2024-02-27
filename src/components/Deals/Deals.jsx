import React from "react";
import "./Deals.scss";
import Desktop from "../../assets/desktop.png";
import Button from "../Button/Button";

function Deals() {
  return (
    <div className="deals">
      <img className="image" src={Desktop} />
      <div className="info">
        <span className="box">20% OFF</span>
        <span className="box">Limited time</span>
      </div>
      <p className="webbuilder">Webbuilder 1</p>
      <p className="text">Computer Modern clasic with wix support</p>
      <div className="purchase-details">
        <p className="price1">$39.96</p>
        <p className="price2">$49.96</p>
        <p className="discount">(20% Off)</p>
      </div>

      <Button name="View Deal" />
    </div>
  );
}

export default Deals;
