import React from 'react'

export default function Carousel({recipe}) {
    return (
        <div>
            <h2>rendering the carousel component</h2>
            {recipe.map(recipeImg => <img src={recipeImg.imgUrl}/>)}
        </div>
    )
}

