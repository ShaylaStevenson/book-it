import axios from "axios";
// Enable access to .env variables
require('dotenv').config();

export default {
  // search google books
  searchBooks: function(query, KEY) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=$" + query + "&" + KEY);
    //"https://www.googleapis.com/books/v1/volumes?q=coding&key=AIzaSyBc7aFFzPmgNSKTaKVlFb6HnsTqWarJktc"
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};