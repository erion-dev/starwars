import React from "react";

import "./Card.css";

export const Card = (props) => {
  return (
    <div className="Card">
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
