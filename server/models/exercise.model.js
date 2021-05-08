const mongoose = require('mongoose')

const Schema = mongoose.Schema

const exerciseScheme = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, require: true },
    date: { type: Date, require: true }
  },
  {
    timestamps: true
  }
)

const Exercise = mongoose.model('Exercise', exerciseScheme)
module.exports = Exercise
