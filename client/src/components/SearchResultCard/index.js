import React from "react";
import "./style.css";

function SearchResultCard(props) {
  return (
    <div className="card" key={props.id}>
      <h4>{props.title}</h4>
      <p><strong>By {props.author}</strong></p>
      <img alt={props.title} className="book-image" src={props.image} />
      <p>{props.description}</p>
      <a href={props.link}> Buy Book </a>
    </div>
  );
}

export default SearchResultCard;