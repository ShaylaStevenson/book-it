import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function Saved() {

    const [books, setBooks] = useState([])
  
    // Load all books and store them with setBooks
    useEffect(() => {
      loadBooks()
    }, [])
  
    // Loads all books and sets them to books
    function loadBooks() {
      API.getBooks()
        .then(res => 
          setBooks(res.data)
        )
        .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(id) {
      API.deleteBook(id)
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  
    return (
      <div className="container-fluid">
          <div className="row">
              <div className="hero">
                  <h1>All Books From Mongo DB</h1>
              </div>

              {books.length ? (

              <div className="cardDeck">
              {books.map(book => {
                  return (
                    <div className="card" key={book._id}>
                      <h4>
                        {book.title} by {book.author}
                      </h4>
                      <li>
                        {book.description}
                      </li>
                      <li>
                        image:
                        {book.image}
                      </li>
                      <li>
                        {book.link}
                      </li>
                      <div className="cardFooter">
                        <button onClick={() => deleteBook(book._id)}>Remove</button>
                      </div>
                    </div>
                  );
              })}
              </div>
              ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
      </div>
    );   
};

export default Saved;