import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <figure className="homes_pic">
      <img src={props.imageUrl} alt={props.name} />

      <figcaption className="homes_desc">{props.name}</figcaption>

      <figcaption className="homes_desc_two">
        {props.city}, {props.country}
      </figcaption>
    </figure>
  );
};

export default Card;
