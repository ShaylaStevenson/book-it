import React, { useEffect, useState } from "react";
import bookAPI from "../../utils/bookAPI";
import SearchResultCard from "../../components/SearchResultCard"
import {Card, Button, CardDeck} from 'react-bootstrap';
       
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
      <h2>Favorite Books</h2>
        <CardDeck> 
          {books.map(book => ( book.favorited?
            <Card key={book._id}>
              <Card.Title> <h1>{book.title} </h1></Card.Title>
              <Card.Text>{book.description}</Card.Text>
              <Card.Text>{book.author}</Card.Text>
              <Card.Text>{book.image}</Card.Text>
              <Card.Text>{book.link}</Card.Text>
              <Button onClick={() => deleteBook(book._id)} />  
            </Card>
          : null ))}
        </CardDeck>
    </div>
  )
};

export default Saved;