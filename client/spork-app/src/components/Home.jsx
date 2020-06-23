import React, { Component } from "react";
import { Route } from "react-router-dom";
import { getRecipes } from "../services/recipes";
import Search from "../components/shared/Search";
import RecipeResults from "../components/RecipeResults";
import Carousel from "./Carousel";
import RecipeDetail from "../components/RecipeDetail";
import IngredientSubResults from "../components/IngredientSubResults";
import Header from "../components/shared/Header"

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      inputValue: "",
      fiveStarRecipes: [],
      vegetarianRecipes: [],
      randomizedRecipes: []
    }
  }
  async componentDidMount() {
    const response = await getRecipes()
    this.carouselDataFilter()
    this.randomizeData()
    this.setState({
      recipes: response
    })
    // console.log(response[0].ingredients[0])
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      inputValue: e.target.value,
    })
  }

  carouselDataFilter = async () => {
    const response = await getRecipes()
    let starData = []
    let veggieData = []
    for (let i = 0; i < response.length; i++) {
      if (response[i].starRating === 5) {
        starData.push(response[i])
      } else if (response[i].dishName.includes("Vegetarian") === true) {
        veggieData.push(response[i])
      }
    }
    this.setState({
      fiveStarRecipes: starData,
      vegetarianRecipes: veggieData
    })
  }

  randomizeData = async () => {
    const response = await getRecipes()
    let randomized = []
    // let randomNum = Math.floor(Math.random() * response.length)
    while (randomized.length < 10) {
      let randomNum = Math.floor(Math.random() * response.length)
      let rRecipe = response[randomNum]
      randomized.push(rRecipe)
    }

    this.setState({
      randomizedRecipes: randomized
    })

  }



  render() {
    return (
      <div>
        {/* <button onClick={this.carouselDataFilter}>Star Recipes!!</button> */}

        <Route path="/" exact>
          <div className="headerDiv2">
            <Header />
          </div>
          <Search
            data={this.state.recipes}
            inputValue={this.state.inputValue}
            onChange={this.handleChange}
          />
          <Carousel data={this.state.fiveStarRecipes} />
          <Carousel data={this.state.vegetarianRecipes} />
          <Carousel data={this.state.randomizedRecipes} />
          <Carousel data={this.state.recipes} />
        </Route>

        <Route exact path="/search/recipes">
          <RecipeResults
            data={this.state.recipes}
            inputValue={this.state.inputValue}
            onChange={this.handleChange}
          />
        </Route>

        <Route path="/search/recipes/:id">
          <RecipeDetail
            data={this.state.recipes}
          />
        </Route>

        <Route path="/substitute">
          <IngredientSubResults inputValue={this.state.inputValue} />
        </Route>

        

      </div>
    )
  }
}
