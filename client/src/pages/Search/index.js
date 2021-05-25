import React, { Component, useEffect, useState } from "react";
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm"

import SearchResultCard from "../../components/SearchResultCard"

// function Search() {
//     const [books, setBooks] = useState([])

//     const [formObject, setFormObject] = useState({
//         query:""
//       })

//     // Loads all books and sets them to books
//     function loadBooks() {
//         API.getBooks()
//           .then(res => 
//             setBooks(res.data)
//           )
//           .catch(err => console.log(err));
//     };

//     // Load all books and store them with setBooks
//     useEffect(() => {
//         loadBooks()
//     }, [])

//     // Handles updating component state when the user types into the input field
//     function handleInputChange(event) {
//         const { name, value } = event.target;
//         setFormObject({...formObject, [name]: value})
//     };

//     // When the form is submitted, use the API.saveBook method to save the book data
//   // Then reload books from the database
//   function handleFormSubmit(event) {
//     event.preventDefault();
//     if (formObject.query) {
//       API.searchBooks({
//         query: formObject.query
//       })
//         .then(() => setFormObject({
//           query: ""
//         }))
//         .then(() => loadBooks())
//         .catch(err => console.log(err));
//     }
//   };



//     return(
        
        
        

//     )
// };

// export default Search;


class Search extends Component {
  
  state = {
    searchResults: []
  };

    componentDidMount() {
         // When this component mounts, search the Google Books API for ...
        this.searchForBooks("zebras");
    };

    

    searchForBooks = query => {
        API.searchBooks(query)
          .then((res) => {
            this.setState({ searchResults: res.data.items })
            console.log(res)
            console.log(this.state.searchResults)
          })
          .catch(err => console.log(err));
      };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
          [name]: value
        });
    };

    // When the form is submitted, search the Giphy API for `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.tellMe();
        this.searchForBooks(this.state.search);
    };
    
    render() {
        return (
          <div>
              

            {/* <SearchForm
              search={this.state.search}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            /> */}

            {/* <ResultList results={this.state.searchResults} /> */}
            {this.state.searchResults.map(result => (
              <SearchResultCard  
                id={result.id}
                key={result.id}
                title={result.volumeInfo.title}
                author={result.volumeInfo.authors}
                description={result.volumeInfo.description}
                image={result.volumeInfo.imageLinks.thumbnail}
                link={result.saleInfo.buyLink}
                // add additional properties to display here
              />
            ))} 
          </div>
        );
      }
      
    // render() {
    //     return (
    //         <div className="row">
    //             <form>
    //                 <input
    //                     type="input"
    //                     onChange={handleInputChange}
    //                     name="query"
    //                     placeholder="Search term"
    //                     value={formObject.query}
    //                 />
    //                 <button
    //                     disabled={!(formObject.query)}
    //                     onClick={handleFormSubmit}
    //                 >
    //                     Search
    //                 </button>
    //             </form>
    //             <div className="row">
                    
    //                     <h1>Trying to get books from google</h1>
                    
    //                 <div className="col-md-12">
    //                 {books.length ? (

    //                 <div className="cardDeck">
    //                     {books.map(book => {
    //                         return (
    //                         <div className="card" key={book._id}>
    //                             <h4>
    //                                 {book.title} by {book.author}
    //                             </h4>
    //                             <li>
    //                                 {book.description}
    //                             </li>
    //                             <li>
    //                                 image:{book.image}
    //                             </li>
    //                             <li>
    //                                 {book.link}
    //                             </li>
    //                         </div>
    //                     );
    //                 })}
    //                 </div>
    //             ) : (
    //             <h3>No Results to Display</h3>
    //             )}
    //         </div>
    //     </div>
    // </div>
    //     );
    // };
};

export default Search;
// blogger.blogs.get(params)
//   .then(res => {
//     console.log(`The blog url is ${res.data.url}`);
//   })
//   .catch(error => {
//     console.error(error);
//   });