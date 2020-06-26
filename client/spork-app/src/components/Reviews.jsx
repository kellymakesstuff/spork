import React, { Component } from 'react'
import { createComment, deleteComments } from "../services/recipes"
import BeautyStars from "beauty-stars"
import { withRouter, Link } from "react-router-dom"
import CondensedHeader from './shared/CondensedHeader'
class Reviews extends Component {
  constructor(props) {
    super(props)
    this.state = {
      review: {
        name: "",
        comment: "",
        starRating: 0
      },

      allReviews: null
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
      allReviews:allReviews
    })
  }

  render() {
    const filteredRecipe = this.props.commentData.find((recipe) => recipe._id === this.props.match.params.id)
    // console.log(filteredRecipe)
    return (
      <div>
        {filteredRecipe &&
          <Link to={`/search/${this.props.inputValue}/${filteredRecipe._id}`}><CondensedHeader /></Link>
        }
        <div className="header">Reviews</div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" onChange={this.handleNameChange} />
          <input type="text" placeholder="Comment" onChange={this.handleCommentChange} />
          <input type="number" placeholder="Star rating" onChange={this.handleRatingChange} />


          <button>Submit</button>
        </form>
        <h1>Reviews for:</h1>
        {filteredRecipe &&
          <div>{filteredRecipe.dishName}</div>}




        {this.state.allReviews && this.state.allReviews.map(review =>
          <div>
            <h3>{review.name}</h3>
            <BeautyStars value={review.starRating} size="10px" />
            <h3>{review.comment}</h3>
            <button>Edit</button>
            <button onClick={()=> this.handleDelete(review._id)}>Delete</button>
          </div>

        )}

      </div>
    )
  }
}
export default withRouter(Reviews) 