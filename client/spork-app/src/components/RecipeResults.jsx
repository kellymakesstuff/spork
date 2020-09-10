import React from 'react'
import { Link, withRouter } from "react-router-dom"
import BeautyStars from "beauty-stars"
import CondensedHeader from './shared/CondensedHeader'
import '../css/Main.css'



function RecipeDetail(props) {
  

  let filteredData = []
  props.data.forEach(recipe =>
    Object.values(recipe.ingredients[0]).forEach(item => {
      if (item.toLowerCase().includes(props.match.params.inputValue.toLowerCase())) {
        filteredData.push(recipe)
      }
    })
  )
 


  return (
    <div>
      <Link to="/"> <CondensedHeader /> </Link>
      <div className="header">Recipe Results</div>
      <div className="recipe-results-master-container">
      <div className="recipe-results-container">
      {filteredData.map(recipes =>
        <div className="filter-detail" key={recipes.dishName}>
          <Link to={`/search/${props.inputValue}/${recipes._id}`}>
          <img src={recipes.imgUrl} alt={recipes.dishName} className="recipe-results-image" />
            <h3>{recipes.dishName}</h3>
          </Link>
          <div className="brief-description">{recipes.briefDescription}</div>
          <div className="star">{recipes.starRating}.0</div>
          <BeautyStars value={recipes.starRating} size="15px" />
          <p>{recipes.prepTime}</p>
        </div>
      )}
</div>
</div>
    </div>
  )
}

export default withRouter (RecipeDetail)
