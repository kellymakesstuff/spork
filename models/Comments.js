const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
    {
        name: {type: String, required: true},
        comment: {type: String, required: true},
        starRating: {type: Number, required: true}

    },{
        timestamps: true
    }
)

module.exports = mongoose.model('comments', Comment)