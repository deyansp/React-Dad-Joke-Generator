import React from "react";
import "./SearchResultsList.css";

class SearchResultsList extends React.Component {
  constructor(props) {
    super();

    this.state = {
      items: props.jokes,
      showResults: props.showResults
    };
  }

  render() {
    return this.state.showResults ? (
      <ul className="jokes-list">
        {this.state.items.length > 0 ? (
          this.state.items.map((item) => <li key={item.id}>{item.joke}</li>)
        ) : (
          <li>No results found.</li>
        )}
      </ul>
    ) : (
      ""
    );
  }
}
export default SearchResultsList;
