import React from 'react'
import {Link} from "react-router-dom"

function Search(props) {

  // const filteredData = props.data.filter(recipe => {
  //   return recipe.ingredients.toLowerCase().includes(props.inputValue.toLowerCase())
  // })
  // console.log(filteredData)

  return (
    <div>
      <form>
        <input type="text" value={props.inputValue} onChange={props.onChange} placeholder="Search"/>
      </form>
      <div>
        <Link to="/search/recipes">
        <button>Recipe</button>
        </Link>
        <Link to="/substitute">
          <button>Substitute</button>
        </Link>
        
        
      </div>
      
    </div>
  )
}

export default (Search) 
