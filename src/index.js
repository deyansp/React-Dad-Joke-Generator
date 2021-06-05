import React from "react";
import ReactDOM from "react-dom";
import SearchForm from "./SearchForm";
import SearchResultsList from "./SearchResultsList";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();

    // default state
    this.state = {
      searchTerm: "",
      jokes: [],
      isFetchingJoke: false,

      // prevents the "No results" message from displaying when first loading the page
      showResultsList: false
    };

    // binding so that event calls reference the componenet and not the HTML element it was called from
    this.searchJokes = this.searchJokes.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
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
        this.setState({
          jokes,
          isFetchingJoke: false,
          showResultsList: true
        });
      });
  }

  onSearchChange(value) {
    this.setState({ searchTerm: value });
  }

  render() {
    return (
      <div className="App">
        <img className="logo" src="google-dad-jokes-logo.png" />
        <SearchForm
          onFormSubmit={this.searchJokes}
          onSearchValueChange={this.onSearchChange}
          isSearching={this.isFetchingJoke}
          onSingleSearchClick={() => this.searchJokes(1)}
        ></SearchForm>

        {this.state.isFetchingJoke ? (
          "Searching for jokes..."
        ) : (
          <SearchResultsList
            items={this.state.jokes}
            showResults={this.state.showResultsList}
          />
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
