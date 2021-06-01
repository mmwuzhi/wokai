const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    createdAt: { type: Date, default: Date.now, index: { expires: 60 * 60 * 3 } },
  },
  { timestamps: true }
)

const Chat = mongoose.model('Chat', chatSchema)
module.exports = Chat
