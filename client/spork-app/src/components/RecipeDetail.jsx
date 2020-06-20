import React from 'react'

export default function RecipeDetail(props) {

  const filteredData = props.data.filter(recipe => {
    return recipe.ingredients.toLowerCase().includes(props.inputValue.toLowerCase())
  })
  console.log(filteredData)

  return (
    <div>
      {filteredData.map(recipes =>
          <div className="filter-detail" key={recipes.dishName}>
          {recipes.dishName}
          <img src={recipes.imgUrl} alt={recipes.dishName} width="250px"/>
          <div className="star">{recipes.starRating}</div>
          </div>
        )}
      
    </div>
  )
}
