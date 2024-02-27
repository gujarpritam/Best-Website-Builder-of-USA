import React from "react";
import Deals from "../Deals/Deals";

import "./Main.scss";
import UpdatedTick from "../../assets/updated-tick.png";
import AdvertisingDisclosure from "../../assets/advertising-disclosure.png";
import DownArrow from "../../assets/down-arrow.png";
import RightArrow from "../../assets/right-arrow.png";
import Desktop from "../../assets/desktop.png";
import RoundedTick from "../../assets/rounded-tick.png";
import FiveStar from "../../assets/five-star.png";
import FourAndHalfStar from "../../assets/four-and-half-star.png";
import FourStar from "../../assets/four-star.png";
import BestChoice from "../../assets/best-choice.png";
import BestValue from "../../assets/best-value.png";
import Button from "../Button/Button";

function Main() {
  return (
    <main>
      <h1>Best Website Builders in the US</h1>

      <div className="line"></div>
      <div className="info">
        <span>
          <img className="info-img" src={UpdatedTick} />
          <div>&nbsp;Last Updated - &nbsp;</div>
          <div>February 22, 2020&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </span>

        <span>
          <img className="info-img" src={AdvertisingDisclosure} />
          <div>&nbsp;Advertising Disclosure</div>
        </span>

        <div className="top-relevant">
          Top Relevant <img className="info-img" src={DownArrow} />
        </div>
      </div>
      <div className="line"></div>

      <div>
        <div className="categories">
          <div className="category">Tools</div>
          <div className="category">AWS Builder</div>
          <div className="category">Start Build</div>
          <div className="category">Build Supplies</div>
          <div className="category">Tooling</div>
          <div className="category">Blue Hosting</div>
        </div>
      </div>

      <div className="route">
        <p className="route-info">Home</p>
        <img className="route-info" src={RightArrow} />
        <p className="route-info">Hosting for all</p>
        <img className="route-info" src={RightArrow} />
        <p className="route-info">Hosting</p>
        <img className="route-info" src={RightArrow} />
        <p className="route-info">Hosting6</p>
        <img className="route-info" src={RightArrow} />
        <p className="route-info">Hosting5</p>
      </div>

      <section>
        <div className="main-box">
          <div>
            <img src={Desktop} />
            <h5>Builder 1</h5>
          </div>

          <div>
            <strong>WixPro 72-Inch Responsive Website Builder-</strong>{" "}
            Comprehensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores (Black/Blue){" "}
            <h4>
              <strong>Main highlights </strong>
            </h4>
            [What You Get]: Receive the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides.
            <div className="show-more">
              <p>Show more</p>
              <img src={DownArrow} />
            </div>
          </div>

          <div className="ratings">
            <div>
              <span>9.8</span>
              <span>Exceptional</span>
              <img src={FiveStar} />
            </div>
            <Button className="view-button-bg" name="View" />
          </div>

          <div>1</div>

          <div>
            <img src={BestChoice} />
            Best Choice
          </div>
        </div>

        <div className="main-box">
          <div>
            <img src={Desktop} />
            <h5>Builder</h5>
          </div>
          <div>
            <strong>SiteCraft 68-Inch Ultimate Web Design Studio-</strong>{" "}
            Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for
            Dynamic Websites and E-commerce Platforms (Green/White)
            <h4>
              <strong>Main highlights </strong>
            </h4>
            [What You Get]: Gain access to the SiteCraft design studio,
            featuring a robust selection of design elements, SEO optimization
            tools, and e-commerce integrations.
            <div className="show-more">
              <p>Show more</p>
              <img src={DownArrow} />
            </div>
          </div>

          <div className="ratings">
            <div>
              <span>9.5</span>
              <span>Excellent</span>
              <img src={FourAndHalfStar} />
            </div>
            <Button className="view-button-bg" name="View" />
          </div>

          <div>2</div>

          <div>
            <img src={BestValue} />
            Best Value
          </div>
        </div>

        <div className="main-box">
          <div>
            <img src={Desktop} />
            <h5>Builder 1</h5>
          </div>
          <div>
            <strong>WixPro 72-Inch Responsive Website Builder-</strong>{" "}
            Comprehensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores (Black/Blue)
            <h4>
              <strong>Main highlights </strong>
            </h4>
            [What You Get]: Receive the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides.
            <div className="show-more">
              <p>Show more</p>
              <img src={DownArrow} />
            </div>
          </div>

          <div className="ratings">
            <div>
              <span>9.3</span>
              <span>Exceptional</span>
              <img src={FiveStar} />
            </div>
            <Button className="view-button-bg" name="View" />
          </div>

          <div>3</div>
        </div>

        <div className="main-box">
          <div>
            <img src={Desktop} />
            <h5>CDK</h5>
          </div>
          <div>
            <strong>CDK Resposive Builder:</strong> An extensive library of
            widgets and apps, and detailed step-by-step guides
            <p className="main-discount">(26% Off)</p>
            <h4>
              <strong>Main highlights </strong>
            </h4>
            <div className="main-sub-box4">
              <p>
                <span>9.9</span>
                <span>Building Responsive</span>
              </p>
              <p>
                <span>8.9</span>
                <span>Cool</span>
              </p>
              <p>
                <span>8.9</span>
                <span>Docs</span>
              </p>
            </div>
            <h4>
              <span>Why we love it</span>
            </h4>
            <div>
              <img className="round-tick" src={RoundedTick} />
              <span>Documentation</span>
            </div>
            <div>
              <img className="round-tick" src={RoundedTick} />
              <span>Easy Use</span>
            </div>
            <div>
              <img className="round-tick" src={RoundedTick} />
              <span>Out Of Box</span>
            </div>
            <div className="show-more">
              <p>Show more</p>
              <img src={DownArrow} />
            </div>
          </div>

          <div className="ratings">
            <div>
              <span>9.1</span>
              <span>Very Good</span>
              <img src={FourStar} />
            </div>
            <Button className="view-button-bg" name="View" />
          </div>

          <div>4</div>
        </div>
      </section>

      <h2 className="sub-heading">Related deals you might like for</h2>
      <div className="related-deals">
        <Deals />
        <Deals />
        <Deals />
      </div>

      <div className="main-sub-container">
        <h2>Sign up and get exclusive special deals</h2>
        <div className="sign-up-box">
          <input className="sign-up-input" />
          <button className="sign-up">Sign Up</button>
        </div>
      </div>
    </main>
  );
}

export default Main;
