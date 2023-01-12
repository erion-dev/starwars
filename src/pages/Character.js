import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Character.css";

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
        <div className="Characters_cards" key={character.name}>
          <div className="imgBx">
            <img
              className="Characters_img"
              src="Characters1.jpeg"
              alt="Characters"
            />
          </div>
          <div className="Characters_id">
            <h2>{character.name}</h2>
            <ul className="Character_order">
              <li>
                <strong>Height:</strong>
                {character.height}
              </li>
              <li>
                <strong>Mass:</strong>
                {character.mass}
              </li>
              <li>
                <strong>Gender:</strong> {character.gender}
              </li>
              <li>
                <strong>Hair Color:</strong>
                {character.hair_color}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Characters;
