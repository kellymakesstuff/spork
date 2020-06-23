import { getRecipes } from './recipes'
import React from 'react'


export const carouselDataFilter = async () => {
        const response = await getRecipes()
        let starData = []
        let veggieData = []
        let meatData = []
        for (let i = 0; i < response.length; i++) {
          if (response[i].starRating === 5) {
            starData.push(response[i])
          } else if (response[i].dishName.includes("Vegetarian") === true) {
            veggieData.push(response[i])
          } else if (response[i].dishName.includes("Chicken") === true || response[i].dishName.includes("Beef") === true || response[i].dishName.includes("Pork") === true) {
            meatData.push(response[i])
          }
        }
        this.setState({
          fiveStarRecipes: starData,
          vegetarianRecipes: veggieData,
          meatRecipes: meatData
        })
      }
    
export const randomizeData = async () => {
        const response = await getRecipes()
        let randomized = []
        while (randomized.length < 10) {
          let randomNum = Math.floor(Math.random() * response.length)
          let rRecipe = response[randomNum]
          randomized.push(rRecipe)
        }
        this.setState({
          randomizedRecipes: randomized
        })
      }
