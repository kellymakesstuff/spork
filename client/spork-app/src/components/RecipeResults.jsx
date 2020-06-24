import React from 'react'
import { Link, withRouter } from "react-router-dom"
import BeautyStars from "beauty-stars"



function RecipeDetail(props) {
  

  // const filteredData = props.data
  //   .filter(search => Object.values(search.ingredients[0]).map(ingredient => ingredient.toLowerCase()).includes(props.inputValue.toLowerCase()))

  let filteredData = []
  props.data.forEach(recipe =>
    Object.values(recipe.ingredients[0]).forEach(item => {
      if (item.toLowerCase().includes(props.inputValue)) {
        filteredData.push(recipe)
      }
    })
  )
 
  // console.log(filteredData)


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
