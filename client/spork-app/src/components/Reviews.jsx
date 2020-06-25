import React, { Component } from 'react'
import { createComment } from "../services/recipes"
import BeautyStars from "beauty-stars"

export default class Reviews extends Component {
    state = {
        review: {
            name: "",
            comment: "",
            starRating: 0
        }
    }

    handleNameChange = (e) => {
        this.setState({
            review: {
                ...this.state.review,
                name: e.target.value
            }
        })
}

handleCommentChange = (e) => {
    this.setState({
        review: {
            ...this.state.review,
            comment: e.target.value
        }
    })
}


    render() {
        return (
            <div>
                <form action="">
                    <input type="text" placeholder="Name" onChange={this.handleNameChange} />
                    <input type="text" placeholder="Comment" onChange={this.handleCommentChange} />
                    {/* <BeautyStars
                        value={this.state.starRating}
                        onClick={ value => this.setState({ value })}
                    /> */}

                    <button>Submit</button>
                </form>

            </div>
        )
    }
}
