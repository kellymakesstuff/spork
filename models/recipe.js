const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Recipe = new Schema(
  {
    dishName: { type: String, required: true },
    imgUrl: { type: String, required: true },
    starRating: { type: Number, min: 0, max: 5, required: true },
    briefDescription: { type: String, required: true },
    ingredients: [{
      oneAmount: { type: String, required: true },
      oneUnit: { type: String, required: true },
      oneName: { type: String, required: true },
      twoAmount: { type: String, required: true },
      twoUnit: { type: String, required: true },
      twoName: { type: String, required: true },
      threeAmount: { type: String, required: true },
      threeUnit: { type: String, required: true },
      threeName: { type: String, required: true },
      fourAmount: { type: String, required: true },
      fourUnit: { type: String, required: true },
      fourName: { type: String, required: true },
      fiveAmount: { type: String, required: true },
      fiveUnit: { type: String, required: true },
      fiveName: { type: String, required: true },
      sixAmount: { type: String, required: false },
      sixUnit: { type: String, required: false },
      sixName: { type: String, required: false },
      sevenAmount: { type: String, required: false },
      sevenUnit: { type: String, required: false },
      sevenName: { type: String, required: false },
      eightAmount: { type: String, required: false },
      eightUnit: { type: String, required: false },
      eightName: { type: String, required: false },
    }],
    instructions: [{
      stepOne: { type: String, required: true },
      stepTwo: { type: String, required: true },
      stepThree: { type: String, required: true },
      stepFour: { type: String, required: true }
    }],
    prepTime: { type: String, required: true },
    comments: [{type: Schema.Types.ObjectId, ref: "comments" }]
  },
  { timestamps: true }
)

module.exports = mongoose.model('recipes', Recipe)