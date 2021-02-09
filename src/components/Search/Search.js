import React from "react";

function Search(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Who are you looking for?"
        onChange={props.onChange}
      ></input>
      <p>Sort by Last Name:</p>
      <button onClick={props.onClick}>{props.sort}</button>
    </div>
  );
}
export default Search;
