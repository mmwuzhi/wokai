import { Schema, model } from 'mongoose'

const commentSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String },
    content: { type: String, required: true },
  },
  { timestamps: true }
)

export default Comment = model('Comment', commentSchema)
