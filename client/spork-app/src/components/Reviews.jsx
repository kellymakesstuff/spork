import React, { Component } from 'react'
import { createComment } from "../services/recipes"
import BeautyStars from "beauty-stars"
import { withRouter } from "react-router-dom"

class Reviews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            review: {
                name: "",
                comment: "",
                starRating: 0
            }
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

    handleRatingChange = (e) => {
        this.setState({
            review: {
                ...this.state.review,
                starRating: e.target.value
            }
        })
    }

    handleSubmit = async (e) => {
        // e.preventDefault()
        let { id } = this.props.match.params
        const created = await createComment(id, this.state.review)
        this.setState({
            created
        })

    }
    

    render() {
      const filteredRecipe = this.props.commentData.find((recipe) => recipe._id === this.props.match.params.id)
      // console.log(filteredRecipe)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" onChange={this.handleNameChange} />
                    <input type="text" placeholder="Comment" onChange={this.handleCommentChange} />
                    <input type="number" placeholder="Star rating" onChange={this.handleRatingChange} />

                    
                    <button>Submit</button>
            </form>
            {/* {filteredRecipe &&
              <h3>{filteredRecipe.comments[0].comment}</h3>} */}
            {filteredRecipe && filteredRecipe.comments.map(review => 
              <div>
              <h1>{review.comment}</h1>
                <h1>{review.name}</h1>
                <BeautyStars value={review.starRating}/>
                </div>
              )}
    
            </div>
        )
    }
}

export default withRouter(Reviews) 