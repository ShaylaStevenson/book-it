import React from "react";
import "./style.css";
import {Button} from 'react-bootstrap';
//Card, 
import bookAPI from "../../utils/bookAPI";


function SearchResultCard(props) {

  function favoriteBook() {
    bookAPI.saveBook(bookFavorited)
    .then((res) => {
      console.log("Book saved as favorited")
    })
    .catch(err => console.log(err));  
  };

  const bookFavorited  = {
    title: props.title,
    description: props.description,
    author: props.author,
    image: props.image,
    link: props.link,
    favorited: true,
  }

  return (
    <div className="card" key={props.id}>
      <h4>{props.title}</h4>
      <p><strong>By {props.author}</strong></p>
      <img alt={props.title} className="book-image" src={props.image} />
      <p>{props.description}</p>
      <a href={props.link}> Buy Book </a>
      <Button variant="danger" onClick = {favoriteBook} >
        Add to Favorites
      </Button>
    </div>
  );
}

export default SearchResultCard;