import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Home/useFetch";
import "./Film.css";

function Film() {
  const { id } = useParams();
  const { data, isloading, error } = useFetch(
    `https://swapi.dev/api/films/${id}`
  );

  if (isloading) return <div className="Home_loading">loading...</div>;
  if (error) return <div className="Home_error">{error}</div>;

  return (
    <div className="Film">
      <h1 className="Film_title">{data.title}</h1>
      <p>{data.opening_crawl}</p>
      <ul>
        <li>Producer:{data.producer}</li>
        <li>Director: {data.director}</li>
      </ul>
    </div>
  );
}

export default Film;
