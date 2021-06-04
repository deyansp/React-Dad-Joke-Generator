import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();

    // default state
    this.state = {
      joke: null
    };

    // binding so that onClick references the componenet and not the button it was called from
    this.onTellJoke = this.onTellJoke.bind(this);
  }

  componentDidMount() {
    this.fetchJoke();
  }

  fetchJoke() {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ joke: json.joke });
      });
  }

  onTellJoke() {
    this.fetchJoke();
  }

  render() {
    return (
      <div>
        <button onClick={this.onTellJoke}> Tell me a joke </button>
        <p>{this.state.joke}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
