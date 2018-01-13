import React, { Component } from "react";
import { Panel } from "react-bootstrap";

import "./App.css";
import ResultComponent from "./ResultComponent";

const api = "http://rlbackend.azurewebsites.net";

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      fetching: false
    };
  }

  componentDidMount() {
    this.setState({ fetching: true });
    fetch(api + "/games")
      .then(response => response.json())
      .then(res => {
        this.setState({ results: res, fetching: false });
      })
      .catch(err => console.log(err));
  }

  renderResults() {
    return this.state.results.map((result, index) => (
      <ResultComponent key={index} {...result} />
    ));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="layer" />
          <h1 className="App-title">Roguelike hackathon tulokset</h1>
        </header>
        {this.state.fetching ? (
          <div className="Loading" />
        ) : (
          <div className="Container">{this.renderResults()}</div>
        )}
      </div>
    );
  }
}

export default App;
