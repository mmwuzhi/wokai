import { Schema, model, Document } from 'mongoose'

const commentSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String },
    content: { type: String, required: true },
  },
  { timestamps: true }
)

export interface CommentDocument extends Document {
  username: string
  email?: string
  content: string
}

export const Comment = model<CommentDocument>('Comment', commentSchema)
