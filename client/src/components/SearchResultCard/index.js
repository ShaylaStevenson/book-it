import React from "react";
// const {google} = require('googleapis');

function SearchResultCard(props) {
  return (
    <div className="card">
        <h4 className="list-group-item" key={props.id}>
          {/* <img alt={result.title} className="img-fluid" src={result.images.original.url} /> */}
          {props.title} by {props.author}
        </h4>
    </div>
  );
}

export default SearchResultCard;

// blogger.blogs.get(params)
//   .then(res => {
//     console.log(`The blog url is ${res.data.url}`);
//   })
//   .catch(error => {
//     console.error(error);
//   });