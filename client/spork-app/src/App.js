import { getRecipes } from './services/recipes'
import Home from './components/Home'
import React, { useEffect, useState } from 'react'




export default function App() {
  const [recipe, updateRecipe] = useState([])

  useEffect(async () => {
    let data = await getRecipes()
    updateRecipe(data)
  }, [])

  return (
    <div>
        <Home />
    </div>
  )
}