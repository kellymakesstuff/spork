import { getRecipes } from './services/recipes'
import Home from './components/Home'
import React, { useEffect, useState } from 'react'
import DummyComponent from './components/DummyComponent'



export default function App() {
  const [recipe, updateRecipe] = useState([])
  useEffect(async () => {
    let data = await getRecipes()
    // console.log(data)
    updateRecipe(data)
    // console.log(recipe)
  }, [])

  return (
    <div>
      {/* <Home recipes={recipe}/> */}
        <Home />
    </div>
  )
}