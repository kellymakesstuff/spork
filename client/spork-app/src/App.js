import { getRecipes } from './services/recipes'
import Home from './components/Home'
import React, { useEffect, useState } from 'react'
import DummyComponent from './components/DummyComponent'


export default function App() {
<<<<<<< HEAD
  const [recipe, updateRecipe] = useState([])
  useEffect(async () => {
=======

  const [recipe, updateRecipe] = useState([])

  useEffect( async() => {
>>>>>>> 96288d65f6819b81507ed49b7cdc51d7320b448f
    let data = await getRecipes()
    console.log(data)
    updateRecipe(data)
    // console.log(recipe)
<<<<<<< HEAD
  }, [])

  return (
    <div>
      {/* <Home recipes={recipe}/> */}
        <Home />
=======
  },[])



  return (
    <div>
      <h2>Hello</h2>
      < DummyComponent />
>>>>>>> 96288d65f6819b81507ed49b7cdc51d7320b448f
    </div>
  )
}