import { Schema, model } from 'mongoose'

const chatSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    msg: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      index: { expires: 60 * 60 * 6 },
    },
  },
  { timestamps: true }
)

export const Chat = model('Chat', chatSchema)
