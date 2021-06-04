import React, { Component } from "react";
//, useEffect, useState
import API from "../../utils/bookAPI.js";
//when API link and everything API related is commented out, it will load to Heroku, but can't do anything
import SearchForm from "../../components/SearchForm"
import SearchResultCard from "../../components/SearchResultCard"
import {Row, Container, CardDeck} from 'react-bootstrap';

class Search extends Component {
  
  state = {
    searchResults: [],
    search: "",
    books: []
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

  // When the form is submitted, search the Google API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchForBooks(this.state.search);
  };

  render() {
    return (
      <div>
        <Container>
          <SearchForm
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />

          {/* <Row> */}
            <CardDeck>
              <Row>
              {this.state.searchResults.map(result => (
                // <div key={result.id}>
                  <SearchResultCard
                    key={result.id}
                    id={result.id}
                    title={result.volumeInfo.title}
                    author={result.volumeInfo.authors}
                    description={result.volumeInfo.description}
                    image={result.volumeInfo.imageLinks.thumbnail}
                    link={result.saleInfo.buyLink}
                  />
                // </div>
              ))}
              </Row>
            </CardDeck>
          {/* </Row> */}
        </Container>
      </div>
    );
  }
};

export default Search;