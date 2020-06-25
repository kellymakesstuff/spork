import React, { Component } from 'react'
import '../css/Main.css'
import arrowRight from '../images/right-arrow.png'
import arrowLeft from '../images/left-arrow.png'
import { Link, Route } from "react-router-dom"
import RecipeDetail from "./RecipeDetail"
import { withRouter } from "react-router-dom"

export default class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentImageIndex: 0,
      images: null,
      arrowNext: arrowRight,
      arrowPrev: arrowLeft,
    }
  }

  componentDidMount() {
    this.setState({
      images: this.props.data
    })
  }

  prevSlide = () => {
    const lastIndex = this.props.data.length - 1
    const resetIndex = this.state.currentImageIndex === 0
    const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1
    this.setState({
      currentImageIndex: index
    })
  }

  nextSlide = () => {

    const lastIndex = this.props.data.length - 1
    const resetIndex = this.state.currentImageIndex === lastIndex
    const index = resetIndex ? 0 : this.state.currentImageIndex + 1
    this.setState({
      currentImageIndex: index
    })
  }


  render() {
    const index = this.state.currentImageIndex

    let firstImages = this.props.data && this.props.data.slice(index, index + 4)
    if (firstImages && firstImages.length < 4) {
      firstImages = firstImages.concat(this.props.data.slice(0, 4 - firstImages.length))
    }

    console.log(this.props.recipeDetails)

    return (
      <>
      <div className="carousel-title-container">
      <h2 className="carousel-title-text">{this.props.title}</h2>
      </div>
      <div className="carousel-container">
        <div className="carousel">
          <img src={this.state.arrowPrev} onClick={this.prevSlide} className="carousel-arrow" />
          {firstImages && firstImages.length > 0 && firstImages.map((image, index) => <><Link to={`/recipesDetail/${image._id}`} > <img key={index} src={image.imgUrl} alt="featured recipes" className="carousel-image" /> </Link></>)}
          <img src={this.state.arrowNext} onClick={this.nextSlide} className="carousel-arrow-next" />
        </div>
      </div>
      </>
    )
  }

}


