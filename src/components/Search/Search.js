import React from "react";

function Search(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Who are you looking for?"
        onChange={props.onChange}
      ></input>
      <button>Search</button>
    </div>
  );
}
export default Search;
