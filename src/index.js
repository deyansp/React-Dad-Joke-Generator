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
    this.onTellJoke = this.onTellJoke.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  searchJokes() {
    this.setState({ isFetchingJoke: true });

    fetch(
      `https://icanhazdadjoke.com/search?term=${this.state.searchTerm}&limit=1`,
      {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }
    )
      .then((response) => response.json())
      .then((json) => {
        const jokes = json.results;
        console.log("jokes", jokes);
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

  onSearchSubmit(event) {
    event.preventDefault();
    this.searchJokes();
  }

  renderJokes() {
    return (
      <ul>
        {this.state.jokes.map((item) => (
          <li key={item.id}>{item.joke}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSearchSubmit}>
          <input
            type="text"
            placeholder="Enter words to search..."
            onChange={this.onSearchChange}
          />

          <button>Search</button>

          <button
            onClick={this.onTellJoke}
            disabled={this.state.isFetchingJoke}
          >
            I'm feeling funny
          </button>
        </form>

        {this.state.isFetchingJoke
          ? "Searching for jokes..."
          : this.renderJokes()}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
