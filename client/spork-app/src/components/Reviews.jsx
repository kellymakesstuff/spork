import React, { Component } from 'react'
import { createComment, deleteComments, updateComments } from "../services/recipes"
import EditButton from "./EditButton"
import BeautyStars from "beauty-stars"
import { withRouter, Link } from "react-router-dom"
import CondensedHeader from './shared/CondensedHeader'
import UpdateReview from "./UpdateReview"

class Reviews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      review: {
        name: "",
        comment: "",
        starRating: 0
      },

      allReviews: null,
      isEmptyState: true
    }
  }




  componentDidMount = async () => {
    const filteredRecipe = await this.props.commentData.find((recipe) => recipe._id === this.props.match.params.id)
    this.setState({ allReviews: filteredRecipe.comments })
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
    e.preventDefault()
    let { id } = this.props.match.params
    const created = await createComment(id, this.state.review)
    this.setState(prevState => ({
      allReviews: [...prevState.allReviews, created]
    }))

    console.log(this.state.allReviews)
  }
  handleDelete = async (id) => {
    // e.preventDefault()
    // let { id } = this.state.allReviews._id 
    const deleted = await deleteComments(id)
    const allReviews = this.state.allReviews.filter(review => {
      return id !== review._id
    })
    this.setState({
      allReviews: allReviews
    })
  }

  triggerAddTripState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true
    })
  }

  handleUpdate = async (id) => {
    // e.preventDefault()
    // let { id } = this.state.allReviews._id 
    const updated = await updateComments(id)
    const allReviews = this.state.allReviews.filter(review => {
      return id !== review._id
    })
    this.setState({
      review: updated
    })
    console.log(this.state.review)
  }


  render() {
    const filteredRecipe = this.props.commentData.find((recipe) => recipe._id === this.props.match.params.id)


    return (
      <div>
        {filteredRecipe &&
          <Link to={`/search/${this.props.inputValue}/${filteredRecipe._id}`}><CondensedHeader /></Link>
        }




        <div className="header">Reviews</div>
        <h2>Submit a Review</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" onChange={this.handleNameChange} />
          <input type="text" placeholder="Comment" onChange={this.handleCommentChange} />
          <input type="number" placeholder="Star rating" onChange={this.handleRatingChange} />


          <button>Submit</button>
        </form>

        <div>
          {this.state.isEmptyState && <editButton addTrip={this.triggerAddTripState} />}

          {this.state.isAddTripState && <UpdateReview props={this.state} />}
        </div>

        <h1>Reviews for:</h1>
        {filteredRecipe &&
          <div>{filteredRecipe.dishName}</div>}

        {/* //review itself  */}

        {this.state.allReviews && this.state.allReviews.map(review =>
          <div>
            <h3>{review.name}</h3>
            <BeautyStars value={review.starRating} size="10px" />
            <h3>{review.comment}</h3>
            <button onClick={() => this.handleUpdate(review._id)}> grab review</button>
            <EditButton addTrip={this.triggerAddTripState} />
            <button onClick={() => this.handleDelete(review._id)}>Delete</button>
          </div>

        )
        }

      </div>
    )
  }
}

export default withRouter(Reviews) 