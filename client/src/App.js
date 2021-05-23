import React from "react";
//, { Component }
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedPage from "./pages/Saved";
import SearchPage from "./pages/Search";
import NavBar from "./components/NavBar";
import "./App.css";

//import logo from "./logo.svg";
//import SavedPage from "../src/pages/Saved"

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <SearchPage />
          </Route>
          <Route exact path="/saved">
            <SavedPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;

// <div className="App">
    //   <div className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h2>Welcome to React</h2>
    //   </div>
    //   <p className="App-intro">
    //     To get started, edit <code>src/App.js
    //       <SavedPage />
    //       </code> and save to reload.
    //   </p>
    // </div>
