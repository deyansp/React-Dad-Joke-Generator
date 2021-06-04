import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();

    // default state
    this.state = {
      joke: null,
      isFetchingJoke: false
    };

    // binding so that onClick references the componenet and not the button it was called from
    this.onTellJoke = this.onTellJoke.bind(this);
  }

  componentDidMount() {
    this.fetchJoke();
  }

  fetchJoke() {
    this.setState({ isFetchingJoke: true });

    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ joke: json.joke, isFetchingJoke: false });
      });
  }

  onTellJoke() {
    this.fetchJoke();
  }

  render() {
    return (
      <div>
        <button onClick={this.onTellJoke} disabled={this.state.isFetchingJoke}>
          Tell me a joke
        </button>
        <p>{this.state.isFetchingJoke ? "Loading joke..." : this.state.joke}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
