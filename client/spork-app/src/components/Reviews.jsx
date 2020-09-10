import React, { Component } from 'react'
import { createComment, deleteComments, updateComments } from "../services/recipes"
import BeautyStars from "beauty-stars"
import { withRouter, Link } from "react-router-dom"
import CondensedHeader from './shared/CondensedHeader'
// import UpdateReview from "./UpdateReview"
import Modal from 'react-modal'
import "../css/Reviews.css"

class Reviews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      review: {
        name: "",
        comment: "",
        starRating: 0,
        isOpen: false,
        update: ''
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

  openModal = () => {
    this.setState({
      isOpen: true
    })
  }

  hideModal = () => {
    this.setState({
      isOpen: false
    })
  }

  updateModal = (id) => {
    this.setState({
      update: id
    })
  }

  hideUpdateModal = () => {
    this.setState({
      update: false
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

  handleUpdate = async (id, comments) => {

    let update = await updateComments(id, this.state.review)
    const allReviews = this.state.allReviews.map(review => (
      review._id === id ? update : review
    ))
    this.setState({
      allReviews: allReviews
    })
  }



  render() {
    const filteredRecipe = this.props.commentData.find((recipe) => recipe._id === this.props.match.params.id)

    return (
      <div>
        {filteredRecipe &&
          <Link to={`/search/${this.props.inputValue}/${filteredRecipe._id}`}><CondensedHeader /></Link>
        }




        <div className="header">Reviews</div>
        <div className="reviewAndForm">
          <h2>Submit a Review</h2>
          <form className="reviewForm" onSubmit={this.handleSubmit}>
            <input className="reviewInput" type="text" placeholder="Name" onChange={this.handleNameChange} value={this.state.review.name} />
            <textarea className="commentInput" type="text" placeholder="Comment" onChange={this.handleCommentChange} value={this.state.review.comment} />
            <input className="star-rating" type="number" placeholder="Star rating" onChange={this.handleRatingChange} value={this.state.review.starRating} min="0"
              max="5" />

            <div className="submit">
              <button className="submit-button">Submit</button>
            </div>
          </form>


          {/* <div>
            {this.state.isEmptyState && <editButton addTrip={this.triggerAddTripState} />}

            {this.state.isAddTripState && <UpdateReview props={this.state} />}
          </div> */}

          <h1>Reviews for:</h1>
          {filteredRecipe &&
            <div>{filteredRecipe.dishName}</div>}

          {/* //review itself  */}

          {this.state.allReviews && this.state.allReviews.map(review =>
            <div className="reviewDiv">

              <h3>{review.name}</h3>
              <BeautyStars value={review.starRating} size="10px" />
              <h3>{review.comment}</h3>
              <button className="update-button" onClick={this.openModal}>Update Review</button>
              <Modal
                isOpen={this.state.isOpen}
                onRequestClose={this.hideModal}
                contentLabel="Example Modal"
              >
                 <button className="hidemodal" onClick={this.hideModal}>X</button>
                <h2 className="reviewAndForm">Edit Review</h2>
                <div className="center-form">
                  <form className="edit-form" onSubmit={this.handleSubmit}>
                    <input
                      className="edit-name"
                      type="text" placeholder="Name"
                      onChange={this.handleNameChange}
                      value={this.state.review.name} />
                    <input
                      className="edit-comment"
                      type="text" placeholder="Comment"
                      onChange={this.handleCommentChange}
                      value={this.state.review.comment} />
                    <input
                      className="edit-rating"
                      type="number"
                      placeholder="Star rating"
                      onChange={this.handleRatingChange}
                      value={this.state.review.starRating}
                      min="0"
                      max="5"
                    />

                  </form>
                </div>
                <div className="submit">
                  <button className="edit-button" onClick={() => this.handleUpdate(review._id)}>Edit Review</button>
                </div>
              </Modal>
              <button className="delete-button" onClick={() => this.handleDelete(review._id)}>Delete</button>
              <hr />
            </div>

          )
          }

        </div>
      </div>
    )
  }
}
export default withRouter(Reviews) 