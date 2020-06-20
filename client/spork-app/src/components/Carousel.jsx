import React, { Component } from 'react'
import '../css/Main.css'
import arrowRight from '../images/right-arrow.png'
import arrowLeft from '../images/left-arrow.png'

export default class Carousel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentImageIndex: 0,
            images: [this.props.data.imgUrl],
            arrowNext: arrowRight,
            arrowPrev: arrowLeft,
            data: props.data
        }
        console.log(this.state.data, `Carousel line 17`)
    }


prevSlide = () => {
    const lastIndex = this.state.images.length - 1
    const resetIndex = this.state.currentImageIndex === 0
    const index = resetIndex ? lastIndex: this.state.currentImageIndex - 1
    this.setState({
        currentImageIndex: index
    })
}

nextSlide = () => {
    const lastIndex = this.state.images.length -1
    const resetIndex = this.state.currentImageIndex === lastIndex
    const index = resetIndex ? 0 : this.state.currentImageIndex + 1
    this.setState({
        currentImageIndex: index
    })
}

    render() {
        const index = this.state.currentImageIndex
        let firstImages = this.state.images.slice(index, index + 5)
        if (firstImages.length < 5) {
            firstImages = firstImages.concat(this.state.images.slice(0, 5 - firstImages.length))
        }

        return (
            <div className="carousel-container">
                <h2>Here's the carousel.</h2>
                <div className="carousel">
                    <img src={this.state.arrowPrev} onClick={this.state.prevSlide} className="carousel-arrow" />
                    {firstImages.map((image, index) => <img key={index} src={image} alt="featured recipes" />)}
                    <img src ={this.state.arrowNext} onClick={this.state.nextSlide} className="carousel-arrow" />
                </div>
            </div>
        )
    }
}
