import React, { Component } from "react";
import Login from "./Login";

class App extends Component {
  componentDidMount() {
    fetch("/api/proposals")
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(proposals => {
        console.log(`json response from backend ${JSON.stringify(proposals)}`);
      })
      .catch(() => {
        console.log(`errr`);
      });
  }
  render() {
    return (
      <div className="App">
        <p>Durgs Application</p>
        <Login />
        <p>Footer</p>
      </div>
    );
  }
}

export default App;
