import React from "react";
import ReactDOM from "react-dom";
import SearchForm from "./SearchForm";

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
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  searchJokes(limit = 20) {
    this.setState({ isFetchingJoke: true });

    fetch(
      `https://icanhazdadjoke.com/search?term=${this.state.searchTerm}&limit=${limit}`,
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
        <SearchForm
          onFormSubmit={this.onSearchSubmit}
          onSearchValueChange={this.onSearchChange}
          isSearching={this.isFetchingJoke}
          onSingleSearchClick={() => this.searchJokes(1)}
        ></SearchForm>

        {this.state.isFetchingJoke
          ? "Searching for jokes..."
          : this.renderJokes()}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
