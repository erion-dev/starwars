import React from "react";

import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="Home_card">
        <div className="imgBx">
          <img
            src="http://samuel-garcia.site/img/the-force.png"
            alt="STAR-WARS-THE-FORCE"
          />
        </div>
        <div className="content">
          <h2>STAR WARS</h2>
          <p>the force awakens</p>
        </div>
      </div>

      <div className="Home_card">
        <div className="imgBx">
          <img
            src="http://samuel-garcia.site/img/last-jedi.png"
            alt="Last-Jedi"
          />
        </div>
        <div className="content">
          <h2>STAR WARS</h2>
          <p>the last jedi</p>
        </div>
      </div>
      <div className="Home_card">
        <div className="imgBx">
          <img
            src="http://samuel-garcia.site/img/the-rise.png"
            alt="STAR-WARS-The-Skywalker"
          />
        </div>
        <div className="content">
          <h2>STAR WARS</h2>
          <p>rise of skywalker</p>
        </div>
      </div>
    </div>
  );
}
