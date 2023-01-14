import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import { Card } from "../../components/Card/Card";
import img from "./starwars11.jpeg";

export default function Home() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState();
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/films/")
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
        <Card
          img={img}
          key={film.episode_id}
          title={film.title}
          description={film.opening_crawl}
        />
      ))}
    </div>
  );
}
