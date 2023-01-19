import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Character.css";
import { Card } from "../../components/Card/Card";
import img from "../Character/characters1.jpeg";

function Characters() {
  const [character, setCharacter] = useState([]);
  const [error, setError] = useState();
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        setCharacter(res.data.results);
      })
      .catch((err) => {
        setError("Characters are on war wait for them");
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);

  if (isloading) return <div className="Character_loading">loading...</div>;
  if (error) return <div className="Home_error">{error}</div>;

  return (
    <div className="Characters">
      {character?.map((character) => (
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
