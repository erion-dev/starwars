import React from "react";
import "./Planets.css";
import { Card } from "../../components/Card/Card";
import img from "../Planets/planet.jpeg";
import useFetch from "../Home/useFetch";

function Planets() {
  const { data, isloading, error } = useFetch("https://swapi.dev/api/planets/");

  if (isloading) return <div className="Home_loading">loading...</div>;
  if (error) return <div className="Home_error">{error}</div>;

  return (
    <div className="Planet">
      {data?.results.map((planets) => (
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
