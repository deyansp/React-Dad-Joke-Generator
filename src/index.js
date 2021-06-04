import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  joke = null;

  onTellJoke() {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        this.joke = json.joke;
        console.log("joke", this.joke);
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.onTellJoke}> Tell me a joke </button>
        <p>{this.joke}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);