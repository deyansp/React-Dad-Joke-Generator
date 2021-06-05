import React from "react";

const SearchForm = (props) => {
  // handle the submission event here instead of the App
  const onSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter words to search..."
        onChange={(event) => props.onSearchValueChange(event.target.value)}
      />

      <button disabled={props.isSearching}>Search</button>

      <button onClick={props.onSingleSearchClick} disabled={props.isSearching}>
        I'm feeling funny
      </button>
    </form>
  );
};

export default SearchForm;
