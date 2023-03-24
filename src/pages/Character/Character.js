import React from "react";
import "./Character.css";
import { Card } from "../../components/Card/Card";
import img from "../Character/characters1.jpeg";
import useFetch from "../Home/useFetch";

function Characters() {
  const { data, isloading, error } = useFetch("https://swapi.dev/api/people/");

  if (isloading) return <div className="Character_loading">loading...</div>;
  if (error) return <div className="Home_error">{error}</div>;

  return (
    <div className="Characters">
      {data?.results.map((character) => (
        <Card
          img={img}
          key={character.name}
          withList
          details={[
            {
              label: "Height",
              value: character.height,
            },
            {
              label: "Mass",
              value: character.mass,
            },
          ]}
          name={character.name}
        />
      ))}
    </div>
  );
}

export default Characters;
