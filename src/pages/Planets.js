import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Planets.css";
import { Card } from "../components/Card/Card";
import img from "../planet.jpeg";

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
        <Card
          img={img}
          key={planets.name}
          withList
          details={[
            {
              label: "Orbital_period",
              value: planets.orbital_period,
            },
            {
              label: "Population",
              value: planets.population,
            },
          ]}
          name={planets.name}
        />
      ))}
    </div>
  );
}

export default Planets;
