import React from "react";

import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="Home_card">
        <div className="imgBx">
          <img
            className="Home_img"
            src="http://samuel-garcia.site/img/the-force.png"
            alt="STAR-WARS-THE-FORCE"
          />
        </div>
        <div className="Home_text">
          <h2>The Force Awakens</h2>
          <p>
            The film was announced after The Walt Disney Company's acquisition
            of Lucasfilm in October 2012.{" "}
          </p>
        </div>
      </div>

      <div className="Home_card">
        <div className="imgBx">
          <img
            className="Home_img"
            src="http://samuel-garcia.site/img/last-jedi.png"
            alt="Last-Jedi"
          />
        </div>
        <div className="Home_text">
          <h2>The Last Jedi</h2>
          <p>
            The Last Jedi premiered in Los Angeles on December 9, 2017 and was
            released in the United States on December 15.
          </p>
        </div>
      </div>
      <div className="Home_card">
        <div className="imgBx">
          <img
            className="Home_img"
            src="http://samuel-garcia.site/img/the-rise.png"
            alt="STAR-WARS-The-Skywalker"
          />
        </div>
        <div className="Home_text">
          <h2>The Rise Of Skywalker</h2>
          <p>
            The Rise of Skywalker premiered in Los Angeles on December 16, 2019,
            and was released in the United States on December 20. It received
            mixed reviews from critics, who praised the acting, action
            sequences, musical score, and visual effects but criticized the
            story, pacing and perceived departures from the plot and themes of
            The Last Jedi.
          </p>
        </div>
      </div>
    </div>
  );
}
