import React from 'react'
import BeautyStars from "beauty-stars"
import {withRouter} from "react-router-dom"

function RecipeDetail(props) {
  console.log(props.data)
  const filteredRecipe = props.data.find((recipe) => recipe._id === props.match.params.id)
  console.log(filteredRecipe)
  return (
    <div>
      <div className="header">Recipe Details</div>
      {filteredRecipe && <div>
        <h2>{filteredRecipe.dishName}</h2>
        <img src={filteredRecipe.imgUrl} alt={filteredRecipe.dishName} width="150px" />
        <BeautyStars value={filteredRecipe.starRating} size="20px"/>
        <div className="preptime">{filteredRecipe.prepTime}</div>
        <div className="ingredients">{filteredRecipe.ingredients}</div>
        
        <div>
          {filteredRecipe.instructions.map((instruct) =>
            
            <div key={instruct._id}>
              <div> 1) {instruct.stepOne}</div>
              <div> 2) {instruct.stepTwo} </div>
              <div> 3) {instruct.stepThree} </div>
              <div> 4) {instruct.stepFour} </div>
            </div>
                        
          )}
        </div>
      </div>
      }
    </div>
  )
}

export default withRouter (RecipeDetail)