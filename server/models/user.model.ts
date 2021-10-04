import { Schema, model, Document } from 'mongoose'

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 2
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
  return await enteredPW === (this as UserDocument).password
}
export interface UserDocument extends Document {
  /** id */
  id: string
  _id: string
  /** 用户名 */
  username: string
  /** 邮箱 */
  email: string
  /** 密码加密盐 */
  /**salt: string*/
  /** 加密的密码 */
  password: string
  /** 创建时间 */
  createTime: Date
  /** 最后登录时间 */
  /**lastLoginTime: Date*/
  matchPW: any
}

export const User = model<UserDocument>('User', userSchema)