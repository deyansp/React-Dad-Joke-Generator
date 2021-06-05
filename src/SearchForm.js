import React from "react";
import "./SearchForm.css";

const SearchForm = (props) => {
  // handle the submission event here instead of the App
  const onSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit();
  };

  return (
    <form onSubmit={onSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter words to search..."
        onChange={(event) => props.onSearchValueChange(event.target.value)}
      />

      <div>
        <button disabled={props.isSearching}>Search</button>

        <button
          onClick={props.onSingleSearchClick}
          disabled={props.isSearching}
        >
          I'm feeling funny
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
