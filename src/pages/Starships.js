import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Starships.css";

function Starships() {
  const [starships, setStarships] = useState([]);
  const [error, setError] = useState();
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/starships/")
      .then((res) => {
        setStarships(res.data.results);
      })
      .catch((err) => {
        setError("Starships are under attack we will be back soon");
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);
  if (isloading) return <div className="Home_loading">loading...</div>;
  if (error) return <div className="Home_error">{error}</div>;
  return (
    <div className="Home">
      {starships?.map((starships) => (
        <div className="Starship_card" key={starships.name}>
          <div className="imgBx">
            <img
              className="Starships_img"
              src="starship.webp"
              alt="starships"
            />
          </div>
          <div className="Starship_text">
            <h2>{starships.name}</h2>
          </div>
          <ul className="Starship_order">
            <li>
              <strong>Manufacturer:</strong>
              {starships.manufacturer}
            </li>
            <li>
              <strong>Cargo Capacity:</strong>
              {starships.cargo_capacity}
            </li>
            <li>
              <strong>Consumables:</strong> {starships.consumables}
            </li>
            <li>
              <strong>Passengers:</strong>
              {starships.passengers}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Starships;
