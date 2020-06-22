import React from "react";
import { Link } from "react-router-dom";

function Search(props) {
  // const filteredData = props.data.filter(recipe => {
  //   return recipe.ingredients.toLowerCase().includes(props.inputValue.toLowerCase())
  // })
  // console.log(filteredData)

  return (
    <div>
      <form>
        <input
          type="text"
          value={props.inputValue}
          onChange={props.onChange}
          placeholder="Search"
          className="search"
        />
      </form>
      <div className="buttons">
        <Link to="/search/recipes">
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
