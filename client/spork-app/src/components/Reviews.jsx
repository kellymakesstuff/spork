import React, { Component } from 'react'
import { createComment } from "../services/recipes"
import BeautyStars from "beauty-stars"
import { withRouter } from "react-router-dom"
import "../css/Reviews.css"
import CondensedHeader from "./shared/CondensedHeader"
import { Link } from "react-router-dom"

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
            <>
                <Link to="/"> <CondensedHeader /> </Link>
                <div className="reviewDiv">

                    <div className="reviewsHeader" >Reviews</div>
                    <div className="reviewAndForm">
                    <h1>Reviews for:</h1>
                    <h2></h2>
    
                    {/* {filteredRecipe &&
              <h3>{filteredRecipe.comments[0].comment}</h3>} */}
                    {filteredRecipe && filteredRecipe.comments.map(review =>
                        <div>
                            <h1>{review.comment}</h1>
                            <h1>{review.name}</h1>
                            <BeautyStars value={review.starRating} />
                        </div>
                    )}
                     <form className="reviewForm" onSubmit={this.handleSubmit}>
                        <input className="reviewInput" type="text" placeholder="Name" onChange={this.handleNameChange} />
                        <input className="reviewInput commentInput" type="text" placeholder="Comment" onChange={this.handleCommentChange} />
                        <input className="reviewInput" type="number" placeholder="Star rating" onChange={this.handleRatingChange} />
                        <button className="reviewButton">Submit</button>
                    </form>
                    </div>

                </div>
            </>
        )
    }
}

export default withRouter(Reviews) 