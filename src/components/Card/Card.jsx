import React from "react";
import { useNavigate } from "react-router-dom";

import "./Card.css";

export const Card = (props) => {
  const nav = useNavigate();
  return (
    <div className="Card" onClick={() => nav(props.to)}>
      <div>
        <img className="Card_image" src={props.img} alt={props.alt} />
      </div>
      <div className="Card_text">
        <h2>{props.title}</h2>
        {props.withList ? (
          <>
            <h2>{props.name}</h2>
            <ul className="Card_info">
              {props.details.map((detail) => (
                <li>
                  <strong>{detail.label}:</strong>
                  {detail.value}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>{props.description}</p>
        )}
      </div>
    </div>
  );
};
