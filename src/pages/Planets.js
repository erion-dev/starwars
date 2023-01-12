import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Planets.css";

function Planets() {
  const [planets, setPlanet] = useState([]);
  const [error, setError] = useState();
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/planets/")
      .then((res) => {
        setPlanet(res.data.results);
      })
      .catch((err) => {
        setError("Planets are under construction");
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);
  if (isloading) return <div className="Home_loading">loading...</div>;
  if (error) return <div className="Home_error">{error}</div>;
  return (
    <div className="Planet">
      {planets?.map((planets) => (
        <div className="Planet_card" key={planets.name}>
          <div className="imgBx">
            <img className="Planet_img" src="planet.jpeg" alt="planets" />
          </div>
          <div className="Planet_text">
            <h2>{planets.name}</h2>
            <ul className="Planet_order">
              <li>
                <strong>Orbital Period:</strong> {planets.orbital_period}
              </li>
              <li>
                <strong>Population:</strong> {planets.population}
              </li>
              <li>
                <strong>Climate:</strong> {planets.climate}
              </li>
              <li>
                <strong>Terrain:</strong> {planets.terrain}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Planets;
