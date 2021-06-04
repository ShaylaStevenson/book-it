import React from "react";
import "./style.css";
import {Button, Card, Col, Row} from 'react-bootstrap';
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
    <div className="col-lg-4 col-md-6 col-sm"> 
      <Card key={props.id} className="mb-2 m-0">
        <Card.Header>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle>{props.author}</Card.Subtitle>
        </Card.Header>

        <Card.Body>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>

        <Card.Footer>
          <Row>
            <Col>
              <Button variant="info" onClick = {favoriteBook} >
                Add to Favorites
              </Button>
            </Col>
            <Col>
              <Button variant="success" href={props.link} >
                Buy Now
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default SearchResultCard;