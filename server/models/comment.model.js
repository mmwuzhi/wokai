const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String },
    content: { type: String, required: true },
    createdTime: { type: Number, required: true },
  },
  { timestamps: true }
)

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment
