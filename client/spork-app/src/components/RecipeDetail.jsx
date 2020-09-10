import React from 'react'
import BeautyStars from "beauty-stars"
import { Link, withRouter } from "react-router-dom"
import clock from "../images/clock.png"
import CondensedHeader from './shared/CondensedHeader'
import '../css/RecipeDetails.css'


function RecipeDetail(props) {
  const recipeDetail = props.data
  const filteredRecipe = recipeDetail.find((recipe) => recipe._id === props.match.params.id)
  

  return (
    <div>
      <Link to="/"><CondensedHeader /></Link>
      <div className="header">Recipe Details</div>

      <div className="recipe-detail-master-container">
      {filteredRecipe && 
        <>
            <div className="recipe-details-name-image">
              <h2 className="recipe-detail-name">{filteredRecipe.dishName}</h2>
              <img src={filteredRecipe.imgUrl} alt={filteredRecipe.dishName} className="recipe-detail-image" />
            </div>
        <div className="recipe-detail-information">
          <div className="recipe-description-text">
            {filteredRecipe.briefDescription}
            
          </div>
          <div className="rating-timer-container">
          <BeautyStars value={filteredRecipe.starRating} size="20px"/>
          <Link to={`/comments/${filteredRecipe._id}`}>Review this recipe</Link>
            <div className="preptime">
              <img src={clock} alt="clock" className="clock-logo"/>
              {filteredRecipe.prepTime}
            </div>
            </div>
        <div className="ingredients-list-container">
          
          <b>Ingredients</b>
          {filteredRecipe.ingredients.map((recipe) =>
            <div key={recipe._id}>
              <div>{recipe.oneAmount} {recipe.oneUnit} {recipe.oneName}</div>
              <div>{recipe.twoAmount} {recipe.twoUnit} {recipe.twoName}</div>
              <div>{recipe.threeAmount} {recipe.threeUnit} {recipe.threeName}</div>
              <div>{recipe.fourAmount} {recipe.fourUnit} {recipe.fourName}</div>
              <div>{recipe.fiveAmount} {recipe.fiveUnit} {recipe.fiveName}</div>
              <div>{recipe.sixAmount} {recipe.sixUnit} {recipe.sixName}</div>
              <div>{recipe.sevenAmount} {recipe.sevenUnit} {recipe.sevenName}</div>
              <div>{recipe.eightAmount} {recipe.eightUnit} {recipe.eightName}</div>
            </div>
          )}
          </div>
          <div>
          <div className="line-break"></div>
          {filteredRecipe.instructions.map((instruct) =>
            <div key={instruct._id}>
              <div className="instruct"><b>Instructions</b></div>
              <div> 1: {instruct.stepOne} </div>
              <div> 2: {instruct.stepTwo} </div>
              <div> 3: {instruct.stepThree} </div>
              <div> 4: {instruct.stepFour} </div>
          </div>
          )}
          </div>
        </div>
      </>
      }
      </div>
    </div>
  )
}

export default withRouter (RecipeDetail)