import React, { useEffect, useState } from "react";
import bookAPI from "../../utils/bookAPI";
import {Card, Button, CardDeck, Container, Row, CardImg, Col} from 'react-bootstrap';
import "./style.css"

function Saved() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {   
    bookAPI.getBooks()
    .then((res) => {
      setBooks(res.data)
      console.log(res.data)})
      .catch(err => console.log(err));
      
  };

  function deleteBook(id) {
    bookAPI.deleteBook(id)
    .then(res => loadBooks())
    .catch(err => console.log(err));
  }

  return(
    <div>
      <Container>
      <h1>Favorite Books</h1>
        <CardDeck> 
          <Row>
          {books.map(book => ( book.favorited?
          <div key={book._id} className="col-lg-4 col-md-6 col-sm">
            <Card className="mb-2 m-0">
              <Card.Header style={{height:"95px"}}>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle>{book.author}</Card.Subtitle>
              </Card.Header>

              <CardImg src={book.image} style={{height:"400px"}}/>

              <Card.Body className="card-body-style">
                    <Card.Text className="card-text-style">{book.description}</Card.Text>
              </Card.Body>

              <Card.Footer style={{height:"95px"}}>
                <Row>
                  <Col>
                    <Button varient="danger" style={{height:"50px"}} onClick={() => deleteBook(book._id)}>
                      Delete Book
                    </Button>
                  </Col>
                  <Col>
                  {/* I don't know why the link isn't working here!No href showing in dev tools */}
                    <Button variant="success" href={book.link} style={{height:"50px"}}>
                      More Info
                    </Button>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
            </div>
          : null ))}
          </Row>
        </CardDeck>
      </Container>
    </div>
  )
};

export default Saved;