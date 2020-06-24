import React, { Component } from "react";
import { Route } from "react-router-dom";
import { getRecipes } from "../services/recipes";
import Search from "../components/shared/Search";
import RecipeResults from "../components/RecipeResults";
import Carousel from "./Carousel";
import RecipeDetail from "../components/RecipeDetail";
import IngredientSubResults from "../components/IngredientSubResults";
import Header from "../components/shared/Header"
import Footer from '../components/shared/Footer'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            recipes: [],
            inputValue: "",
            fiveStarRecipes: [],
            vegetarianRecipes: [],
            randomizedRecipes: [],
            meatRecipes: []
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

    carouselDataFilter = async () => {
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

    randomizeData = async () => {
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

                <Route path="/" exact>
                    <div className="headerDiv2">
                        <Header />
                    </div>
                    <Search
                        data={this.state.recipes}
                        inputValue={this.state.inputValue}
                        onChange={this.handleChange}
                    />
                    <Carousel recipeDetails={this.state.recipes} title="Top rated recipes" data={this.state.fiveStarRecipes} />
                    <Carousel recipeDetails={this.state.recipes} title="Veggie lovers recipes" data={this.state.vegetarianRecipes} />
                    <Carousel recipeDetails={this.state.recipes} title="Meat lovers recipes" data={this.state.meatRecipes} />
                    <Carousel recipeDetails={this.state.recipes} title="Random recipes" data={this.state.randomizedRecipes} />

                </Route>

                <Route exact path="/search/:inputValue">
                    <RecipeResults
                        data={this.state.recipes}
                        inputValue={this.state.inputValue}
                        onChange={this.handleChange}
                    />
                </Route>

                <Route path="/search/:inputValue/:id">
                    <RecipeDetail
                        data={this.state.recipes}
                    />
                </Route>

                <Route path="/substitute">
                    <IngredientSubResults inputValue={this.state.inputValue} />
                </Route>

                <Route path="/recipesDetail/:id">
                    <RecipeDetail   data={this.state.recipes} />
                </Route>


                <Footer />
            </div>
        )
    }
}
