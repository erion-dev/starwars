import React from "react";
import "./Home.css";
import img from "./starwars11.jpeg";
import { Card } from "../../components/Card/Card";
import useFetch from "./useFetch";

export default function Home() {
  const { data, isloading, error } = useFetch("https://swapi.dev/api/films/");

  if (isloading) return <div className="Character_loading">loading...</div>;
  if (error) return <div className="Home_error">{error}</div>;

  return (
    <div className="Home">
      {data?.results.map((film) => (
        <Card
          to={`film/${film.episode_id}`}
          img={img}
          key={film.episode_id}
          title={film.title}
          description={film.opening_crawl}
        />
      ))}
    </div>
  );
}
