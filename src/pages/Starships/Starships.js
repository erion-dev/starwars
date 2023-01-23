import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Starships.css";
import { Card } from "../../components/Card/Card";
import img from "../Starships/starship.webp";

function Starships() {
  const [starship, setStarships] = useState([]);
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
      {starship?.map((starship) => (
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
