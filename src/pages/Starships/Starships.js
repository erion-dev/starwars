import React from "react";
import "./Starships.css";
import { Card } from "../../components/Card/Card";
import img from "../Starships/starship.webp";
import useFetch from "../Home/useFetch";

function Starships() {
  const { data, isloading, error } = useFetch(
    "https://swapi.dev/api/starships/ "
  );

  if (isloading) return <div className="Home_loading">loading...</div>;
  if (error) return <div className="Home_error">{error}</div>;

  return (
    <div className="Home">
      {data?.results.map((starship) => (
        <Card
          img={img}
          key={starship.name}
          withList
          details={[
            {
              label: "Manufacturer",
              value: starship.manufacturer,
            },
            {
              label: "Passengers",
              value: starship.passengers,
            },
          ]}
          name={starship.name}
        />
      ))}
    </div>
  );
}

export default Starships;
