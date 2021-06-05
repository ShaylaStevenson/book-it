import React from "react";
import "./style.css";
import {Button, Card, CardImg, Col, Row} from 'react-bootstrap';
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
        <Card.Header style={{height:"95px"}}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle>{props.author}</Card.Subtitle>
        </Card.Header>

        <CardImg src={props.image} style={{height:"400px"}}/>

        <Card.Body className="card-body-style">
              <Card.Text className="card-text-style">{props.description}</Card.Text>
        </Card.Body>
        

        <Card.Footer style={{height:"95px"}}>
          <Row>
            <Col>
              <Button variant="info" onClick = {favoriteBook} style={{height:"50px"}}>
                Add to Favorites
              </Button>
            </Col>
            <Col>
              <Button variant="success" href={props.link} style={{height:"50px"}}>
                More Info
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default SearchResultCard;