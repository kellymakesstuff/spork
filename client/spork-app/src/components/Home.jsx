import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import { getRecipes } from "../services/recipes";
import Search from "../components/shared/Search";
import RecipeResults from "../components/RecipeResults";
import Carousel from "./Carousel";
import RecipeDetail from "../components/RecipeDetail";
import IngredientSubResults from "../components/IngredientSubResults";
import Header from "../components/shared/Header"
import Footer from '../components/shared/Footer'
import About from "../components/About"
import CondensedHeader from "../components/shared/CondensedHeader"
import Reviews from "./Reviews"
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { connect } from 'react-redux'
import SignInAndSignUp from '../page/SignInAndSignUp'
import { auth, createUserProfile } from '../firebase/firebase'
import { setCurrentUser } from '../redux/user/user.action'
import { selectCurrentUser } from '../redux/user/user.selector'



class Home extends Component {
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
  unsubscribeFromAuth = null

  async componentDidMount() {
    const response = await getRecipes()
    this.carouselDataFilter()
    this.randomizeData()
    this.setState({
      recipes: response
    })
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
          // console.log(this.state)
        })
      }
      setCurrentUser(userAuth)
      // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
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

  onKeyPress = (e) => {
    e.preventDefault()
    this.props.history.push(`/search/${this.state.inputValue}`)
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
            onKeyPress={this.onKeyPress}
          />
          <Carousel recipeDetails={this.state.recipes} title="Top rated recipes" data={this.state.fiveStarRecipes} />
          <Carousel recipeDetails={this.state.recipes} title="Veggie lovers recipes" data={this.state.vegetarianRecipes} />
          <Carousel recipeDetails={this.state.recipes} title="Meat lovers recipes" data={this.state.meatRecipes} />
          <Carousel recipeDetails={this.state.recipes} title="Random recipes" data={this.state.randomizedRecipes} />

          <Footer />

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
          <RecipeDetail data={this.state.recipes} />
        </Route>


        <Route exact path="/about">
          <CondensedHeader />
          <About />
        </Route>

        <Route exact path="/comments/:id">
          {this.state.recipes.length > 0 && <Reviews commentData={this.state.recipes} />}
        </Route>

        <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)} />

      </div>
    )
  }
}



const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

// export default compose(
//   withRouter,
//   connect(mapStateToProps,mapDispatchToProps)
// )(Home)

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home))