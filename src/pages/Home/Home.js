import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

export default function Home() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState();
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    axios
      .get( "https://swapi.dev/api/films/")
      .then((res) => {
        setFilms(res.data.results);
      })
      .catch((err) => {
        setError("Error happend try later");
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);
  if (isloading) return <div className="Home_loading">loading...</div>;
  if (error) return <div className="Home_error">{error}</div>;
  return (
    <div className="Home">
      {films?.map((film) => (
        <div className="Home_card" key={film.episode_id}>
          <div className="imgBx">
            <img
              className="Home_img"
              src="http://samuel-garcia.site/img/last-jedi.png"
              alt="Last-Jedi"
            />
          </div>
          <div className="Home_text">
            <h2>{film.title}</h2>
            <p>{film.opening_crawl}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
