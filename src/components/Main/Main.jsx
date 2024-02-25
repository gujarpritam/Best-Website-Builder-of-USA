import React from "react";
import "./Main.scss";
import UpdatedTick from "../../assets/updated_tick.png";
import AdvertisingDisclosure from "../../assets/advertising_disclosure.png";
import DownArrow from "../../assets/down_arrow.png";

function Main() {
  return (
    <div className="main-container">
      <h1 className="main-heading">Best Website builders in the US</h1>
      <div className="info">
        <img className="info-img" src={UpdatedTick} />
        <div>&nbsp;Last Updated - &nbsp;</div>
        <div>February 22, 2020&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <img className="info-img" src={AdvertisingDisclosure} />
        <div>&nbsp;Advertising Disclosure</div>
        <div className="top-relevant">
          Top Relevant <img className="info-img" src={DownArrow} />
        </div>
      </div>

      <div>
        <div className="categories">
          <div>Tools</div>
          <div>AWS Builder</div>
          <div>Start Build</div>
          <div>Build Supplies</div>
          <div>Tooling</div>
          <div>Blue Hosting</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
