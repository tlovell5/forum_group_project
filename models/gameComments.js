const mongoose = require("mongoose")
const Schema = mongoose.Schema

const gameCommentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    user: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("GameComment", gameCommentSchema)