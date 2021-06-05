import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();

    // default state
    this.state = {
      searchTerm: "",
      jokes: [],
      isFetchingJoke: false
    };

    // binding so that event calls reference the componenet and not the HTML element it was called from
    this.searchJokes = this.searchJokes.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    this.searchJokes();
  }

  searchJokes() {
    this.setState({ isFetchingJoke: true });

    fetch("https://icanhazdadjoke.com/search", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        const jokes = json.results;
        this.setState({
          jokes,
          isFetchingJoke: false
        });
      });
  }

  onTellJoke() {
    this.searchJokes();
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Enter words to search..." onChange={this.onSearchChange}/>
          <button
            onClick={this.searchJokes}
            disabled={this.state.isFetchingJoke}
          >
            Tell me a joke
          </button>
        </form>
        <p>{this.state.isFetchingJoke ? "Loading joke..." : this.state.jokes.toString()}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);