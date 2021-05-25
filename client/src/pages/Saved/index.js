import React, { Component, useEffect, useState } from "react";
//import API from "../../utils/API";
import SearchResultCard from "../../components/SearchResultCard"
// error from Heroku
// Cannot find file '../../utils/API' in './src/pages/Saved'.
       
class Saved extends Component {
  state = {
    savedBooks: []
  };

  // componentDidMount() {
  //   API.getBooks()
  //   .then((res) => {
  //     this.setState({ savedBooks: res.data})
  //     console.log(res)
  //     console.log(this.state.savedBooks)
  //   })
  //   .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //   .then(console.log("book deleted"))
  //   .catch(err => console.log(err));

  //   API.getBooks()
  //   .then((res) => {
  //     this.setState({ savedBooks: res.data})
  //     console.log(res)
  //     console.log(this.state.savedBooks)
  //   })
  //   .catch(err => console.log(err));

  // };

  render() {
    return(
      <div className="container-fluid">
          <div className="row">
              <div className="hero">
                  <h1>All Books From Mongo DB</h1>
              </div>

              {/* {this.state.savedBooks.length ? ( */}

              <div className="cardDeck">
              {this.state.savedBooks.map(book => (
                <div key={book._id}>
                  <SearchResultCard  
                    id={book._id}
                    title={book.title}
                    author={book.author}
                    description={book.description}
                    image={book.image}
                    link={book.link}
            // add additional properties to display here
                  />
                  <button onClick={() => this.deleteBook(book._id)}>Remove</button>
                </div>
              ))}
          </div>
              {/* {this.state.savedBooks.map(book => {
                  
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
                        <button onClick={() => this.deleteBook(book._id)}>Remove</button>
                      </div>
                    </div>
                
              })} */}
              
               {/* ) : (
               <h3>No Results to Display</h3>
             )} */}
        </div>
      </div>
    )
  }


};



// function Saved() {

//     const [books, setBooks] = useState([])
  
//     // Load all books and store them with setBooks
//     useEffect(() => {
//       loadBooks()
//     }, [])
  
//     // Loads all books and sets them to books
//     function loadBooks() {
//       API.getBooks()
//         .then(res => 
//           setBooks(res.data)
//         )
//         .catch(err => console.log(err));
//     };

//     // Deletes a book from the database with a given id, then reloads books from the db
//     function deleteBook(id) {
//       API.deleteBook(id)
//         .then(res => loadBooks())
//         .catch(err => console.log(err));
//     }
  
//     return (
//       <div className="container-fluid">
//           <div className="row">
//               <div className="hero">
//                   <h1>All Books From Mongo DB</h1>
//               </div>

//               {books.length ? (

//               <div className="cardDeck">
//               {books.map(book => {
//                   return (
//                     <div className="card" key={book._id}>
//                       <h4>
//                         {book.title} by {book.author}
//                       </h4>
//                       <li>
//                         {book.description}
//                       </li>
//                       <li>
//                         image:
//                         {book.image}
//                       </li>
//                       <li>
//                         {book.link}
//                       </li>
//                       <div className="cardFooter">
//                         <button onClick={() => deleteBook(book._id)}>Remove</button>
//                       </div>
//                     </div>
//                   );
//               })}
//               </div>
//               ) : (
//               <h3>No Results to Display</h3>
//             )}
//         </div>
//       </div>
//     );   
// };

export default Saved;