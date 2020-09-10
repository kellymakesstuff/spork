import React from "react";
import { Link } from "react-router-dom";

function Search(props) {

 

  let results = []
  props.data.forEach(recipe =>
    Object.values(recipe.ingredients[0]).forEach(item => {
      if (item.toLowerCase().includes(props.inputValue)) {
        results.push(recipe)
      }
    })
  )
  


  return (
    <div className="main-form">
      <form className="form" onSubmit={props.onKeyPress}>
        <input
          type="text"
          value={props.inputValue}
          onChange={props.onChange}
          placeholder="Search"
          className="search"
        />
      </form>
      <div className="search-buttons">
        <Link to={`/search/${props.inputValue}`}>
          <button className="recipe-button">Recipe</button>
        </Link>
        <Link to="/substitute">
          <button className="sub-button">Substitute</button>
        </Link>
      </div>
    </div>
  );
}

export default Search;
