import React from 'react'
import BeautyStars from "beauty-stars"
import {withRouter} from "react-router-dom"

function RecipeDetail(props) {
  // console.log(props.data)
  const recipeDetail = props.data
  // console.log(recipeDetail)

  const filteredRecipe = recipeDetail.find((recipe) => recipe._id === props.match.params.id)
  // console.log(filteredRecipe)

  return (
    <div>
      <div className="header">Recipe Details</div>
      {filteredRecipe && <div>
        <h2>{filteredRecipe.dishName}</h2>
        <img src={filteredRecipe.imgUrl} alt={filteredRecipe.dishName} width="150px" />
        <BeautyStars value={filteredRecipe.starRating} size="20px"/>
        <div className="preptime">{filteredRecipe.prepTime}</div>
        
        <div className="ingredients-list">
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
          {filteredRecipe.instructions.map((instruct) =>
            <div key={instruct._id}>
              <div> 1: {instruct.stepOne} </div>
              <div> 2: {instruct.stepTwo} </div>
              <div> 3: {instruct.stepThree} </div>
              <div> 4: {instruct.stepFour} </div>
          </div>
          )}
        </div>

      </div>
      }
    </div>
  )
}

export default withRouter (RecipeDetail)