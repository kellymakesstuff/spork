import { getRecipes } from './services/recipes'
import Home from './components/Home'
import React, { useEffect, useState } from 'react'


export default function App() {

  const [recipe, updateRecipe] = useState([])

  useEffect( async() => {
    let data = await getRecipes()
    console.log(data)
    updateRecipe(data)
    // console.log(recipe)
  },[])



  return (
    <div>
      <h2>Hello</h2>

    </div>
  )
}

