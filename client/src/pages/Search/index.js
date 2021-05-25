import React, { Component, useEffect, useState } from "react";
//import API from "../../utils/API.js";
import SearchForm from "../../components/SearchForm"
import SearchResultCard from "../../components/SearchResultCard"

class Search extends Component {
  
  state = {
    searchResults: [],
    search: "",
  };

  // componentDidMount() {
  //   // When this component mounts, search the Google Books API for ...
  //   this.searchForBooks("zebras");
  // };

  // searchForBooks = query => {
  //   API.searchBooks(query)
  //     .then((res) => {
  //       this.setState({ searchResults: res.data.items })
  //       console.log(res)
  //       console.log(this.state.searchResults)
  //     })
  //     .catch(err => console.log(err));
  //     };

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
    this.searchForBooks(this.state.search);
  };
    


  saveThisBook = () => {
    
      const bookData = {
        title: this.title,
        author: this.authors,
        description: this.description,
        image: this.image,
        link: this.link,
      }
    
    API.saveBook(bookData)
    .then(
      console.log(bookData)
    )
    .catch(err => console.log(err));
      
    
  }
  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
           
        {this.state.searchResults.map(result => (
        <div key={result.id}>
          <SearchResultCard  
            id={result.id}
            title={result.volumeInfo.title}
            author={result.volumeInfo.authors}
            description={result.volumeInfo.description}
            image={result.volumeInfo.imageLinks.thumbnail}
            link={result.saleInfo.buyLink}
            // add additional properties to display here
          />
          <button onClick={() => this.saveThisBook()}>Save Book</button>
        </div>
        ))} 
      </div>
    );
  }
};

export default Search;