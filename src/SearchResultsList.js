import React from "react";
import "./SearchResultsList.css";

const SearchResultsList = (props) => {
  return props.showResults ? (
    <ul className="jokes-list">
      {props.items.length > 0 ? (
        props.items.map((item) => <li key={item.id}>{item.joke}</li>)
      ) : (
        <li>No results found.</li>
      )}
    </ul>
  ) : (
    ""
  );
};

export default SearchResultsList;
