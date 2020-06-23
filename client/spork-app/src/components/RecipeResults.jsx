import React from 'react'
import { Link, withRouter } from "react-router-dom"
import BeautyStars from "beauty-stars"


function RecipeDetail(props) {
  // console.log(props.data)

  const filteredData = props.data
    .filter(search => Object.values(search.ingredients[0]).map(ingredient => ingredient.toLowerCase()).includes(props.inputValue.toLowerCase()))
  
    // console.log(Object.values(props.data[1].ingredients[0]))
  
  // console.log(filteredData)

  // const filteredData = props.data.filter(recipe => {
  //   return recipe.ingredients.toLowerCase().includes(props.inputValue.toLowerCase())
  // })

  return (
    <div>
      <div className="header">Recipe Results</div>
      {filteredData.map(recipes =>
        <div className="filter-detail" key={recipes.dishName}>
          <Link to={`/search/recipes/${recipes._id}`}>
          <img src={recipes.imgUrl} alt={recipes.dishName} width="250px" />
            <h3>{recipes.dishName}</h3>
            </Link>
          <div className="star">{recipes.starRating}.0</div>
          <BeautyStars value={recipes.starRating} size="15px" />
          <p>{recipes.prepTime}</p>
        </div>
      )}

    </div>
  )
}

export default withRouter (RecipeDetail)
