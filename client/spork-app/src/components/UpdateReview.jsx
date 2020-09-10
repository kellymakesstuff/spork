import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import '../css/UpdateReview.css'


class UpdateReview extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      comment: '',
      starRating: ''
    }
  }

  componentDidMount() {
    if (this.props.reviewItem) {
      this.setFormData();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.reviewItem !== this.props.reviewItem) {
      this.setFormData();
    }
  }

  setFormData = () => {
    this.setState({
      name: this.props.reviewItem.name,
      comment: this.props.reviewItem.comment,
      starRating: this.props.reviewItem.starRating
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }



  render() {
    

    const { name, comment, starRating } = this.state
    const { id, update, hideModal, handleUpdate } = this.props
    const showModalView = update === id ? 'modal display-block' : 'modal display-none'

    return (
      <div >
        <div className="w-full max-w-xs z-50">
          <div className={showModalView}>
            <section className='modal-main'>
              <button onClick={hideModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-1">X</button>
              <form onSubmit={(e) => {
                e.preventDefault();
                handleUpdate(id, this.state);
                // history.push(`/states/${id}/climbs/${id}/reviews`)
              }} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 z-20">
                <h3 className="flex justify-center text-3xl text-blue-500 font-semibold">Update Review</h3>
                
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Rating:
        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Name"
                      type="number"
                      min="0"
                      max="5"
                      name="rating"
                      value={starRating}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Name:
        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Name"
                      type="text"
                      name="name"
                      value={name}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Comment
        <textarea className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
                      placeholder="Comment"
                      type="text"
                      name="comment"
                      value={comment}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>

                
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={hideModal}>Submit</button>
              </form>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(UpdateReview)