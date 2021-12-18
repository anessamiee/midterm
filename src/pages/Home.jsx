import React from "react";
import card from "../img/card 1.jpg";
export default function Home() {
  return (
    <div id="Home" className="main">
      <div className="flex-column-container">
        <div className="head">
          <h1>
            Hi! I am Max and this is my portfolio. I can help you build a
            successful brand. Don’t be shy, get in touch!
          </h1>
        </div>
        <div id="home-grid">
          <div className="flex-row-container img-grid-row">
            <div className="flex-column-container img-grid-column">
              <div className="img-zoom">
                <img src={card} />
              </div>
              <div className="img-zoom">
                <img src={card} />
              </div>
              <div className="img-zoom">
                <img src={card} />
              </div>
            </div>
            <div className="flex-column-container img-grid-column">
              <div className="img-zoom">
                <img src={card} />
              </div>
              <div className="img-zoom">
                <img src={card} />
              </div>
              <div className="img-zoom">
                <img src={card} />
              </div>
            </div>
            <div className="flex-column-container img-grid-column">
              <div className="img-zoom">
                <img src={card} />
              </div>
              <div className="img-zoom">
                <img src={card} />
              </div>
              <div className="img-zoom">
                <img src={card} />
              </div>
            </div>
            <div className="flex-column-container img-grid-column">
              <div className="img-zoom">
                <img src={card} />
              </div>
              <div className="img-zoom">
                <img src={card} />
              </div>
              <div className="img-zoom">
                <img src={card} />
              </div>
            </div>
            <div className="flex-column-container img-grid-column">
              <div className="img-zoom">
                <img src={card} />
              </div>
              <div className="img-zoom">
                <img src={card} />
              </div>
              <div className="img-zoom">
                <img src={card} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
