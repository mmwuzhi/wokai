const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
)

userSchema.methods.matchPW = async function (enteredPW) {
  return await enteredPW === this.password
}

const User = mongoose.model('User', userSchema)
module.exports = User
