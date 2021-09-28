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

export interface ChatDocument extends Document {
  /** 用户名 */
  name: string
  /** 信息 */
  msg: string
}

export const Chat = model<ChatDocument>('Chat', chatSchema)
