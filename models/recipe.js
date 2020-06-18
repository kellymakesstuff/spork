const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema(
  {
    dishName: { type: String, required: true },
    imgUrl: { type: String, required: true },
    starRating: { type: Number, min: 0, max: 5, required: true },
    ingredients: { type: String, required: true },
    instructions: [{
      stepOne: { type: String, required: true },
      stepTwo: { type: String, required: true },
      stepThree: { type: String, required: true },
      stepFour: { type: String, required: true }
    }],
    prepTime: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('recipes', Recipe)