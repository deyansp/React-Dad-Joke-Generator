import React from "react";

const SearchForm = (props) => (
  <form onSubmit={props.onFormSubmit}>
    <input
      type="text"
      placeholder="Enter words to search..."
      onChange={props.onSearchValueChange}
    />

    <button disabled={props.isSearching}>Search</button>

    <button onClick={props.onSingleSearchClick} disabled={props.isSearching}>
      I'm feeling funny
    </button>
  </form>
);

export default SearchForm;
