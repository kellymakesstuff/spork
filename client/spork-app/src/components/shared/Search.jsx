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
  console.log(results)


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
