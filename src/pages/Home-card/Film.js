import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Film.css";

function Film() {
  const [film, setFilm] = useState([]);
  const [error, setError] = useState();
  const [isloading, setIsloading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/films/${id}`)
      .then((res) => {
        setFilm(res.data);
      })
      .catch((err) => {
        setError("Error happend try later");
      })
      .finally(() => {
        setIsloading(false);
      });
  }, [id]);

  if (isloading) return <div className="Home_loading">loading...</div>;
  if (error) return <div className="Home_error">{error}</div>;

  return (
    <div className="Film">
      <h1 className="Film_title">{film.title}</h1>
      <p>{film.opening_crawl}</p>
      <ul>
        <li>Producer:{film.producer}</li>
        <li>Director: {film.director}</li>
      </ul>
    </div>
  );
}

export default Film;
