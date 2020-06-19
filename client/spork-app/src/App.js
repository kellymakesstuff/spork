import { getRecipes } from './services/recipes'
import Home from './components/Home'
import React, { useEffect, useState } from 'react'


export default function App() {
  
  const [recipe, updateRecipe] = useState([])
  
  useEffect(() => {
    apiCall()
  },[])
  
  let apiCall = async () => {
    let data = await getRecipes()
    console.log(data)
  }
  

  return (
    <div>
      
      
    </div>
  )
}

