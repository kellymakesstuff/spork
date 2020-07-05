// import React, { Component } from 'react'
// import { createComment } from "../services/recipes"
// import BeautyStars from "beauty-stars"
// import { withRouter, Link } from "react-router-dom"
// import CondensedHeader from './shared/CondensedHeader'


// class UpdateReview extends Component {
//   constructor(props) {
//     super(props)

//   }


//   // componentDidMount = async () => {
//   //   const filteredRecipe = await this.props.commentData.find((recipe) => recipe._id === this.props.match.params.id)
//   //   this.setState({ allReviews: filteredRecipe.comments })
//   // }

//   handleNameChange = (e) => {
//     this.setState({
//       review: {
//         ...this.state.review,
//         name: e.target.value
//       }
//     })
//   }

//   handleCommentChange = (e) => {
//     this.setState({
//       review: {
//         ...this.state.review,
//         comment: e.target.value
//       }
//     })
//   }

//   handleRatingChange = (e) => {
//     this.setState({
//       review: {
//         ...this.state.review,
//         starRating: e.target.value
//       }
//     })
//   }

//   handleSubmit = async (e) => {
//     e.preventDefault()
//     let { id } = this.props.match.params
//     const created = await createComment(id, this.state.review)
//     this.setState(prevState => ({
//       allReviews: [...prevState.allReviews, created]
//     }))
//   }
//   render() {

//     // const filteredRecipe = this.props.commentData.find((recipe) => recipe._id === this.props.match.params.id)



//     return <div className="editReview"><h2>Edit your Review</h2>
//       {/* <form onSubmit={this.handleSubmit}> */}
//       <form>
//         <input type="text" value="hi" onChange={this.handleNameChange} />
//         <input type="text" value="hi" onChange={this.handleCommentChange} />
//         <input type="number" value="2" onChange={this.handleRatingChange} />
//         <button>Submit</button>
//       </form>
//     </div>
//   }
// }


// export default withRouter(UpdateReview)


