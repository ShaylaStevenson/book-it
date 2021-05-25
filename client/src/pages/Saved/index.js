import React, { Component } from "react";
//, useEffect, useState
import API from "../../utils/API";
import SearchResultCard from "../../components/SearchResultCard"
// error from Heroku
// Cannot find file '../../utils/API' in './src/pages/Saved'.
       
class Saved extends Component {
  state = {
    savedBooks: [
      {
        title: "The Dead Zone",
        author: "Stephen King",
        description:
          "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
        image: "https://example.com",
        link: "https://example.com"
      }
    ]
  };

  componentDidMount() {
    console.log(this.state.savedBooks)
    API.getBooks()
    .then((res) => {
      this.setState({ savedBooks: res.data})
      console.log(res)
      console.log(this.state.savedBooks)
    })
    .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
    .then(console.log("book deleted"))
    //.then(this.componentDidMount())
    .catch(err => console.log(err));

    API.getBooks()
    .then((res) => {
      this.setState({ savedBooks: res.data})
      console.log(res)
      console.log(this.state.savedBooks)
    })
    .catch(err => console.log(err));
  };

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
                    key={book._id}
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