import express from 'express'
import asyncHandler from 'express-async-handler'

import { User, UserDocument } from '../models/user.model'

const router = express.Router()

router.route('/').post(
  asyncHandler(async (req: express.Request, res: express.Response) => {
    const { username, email, password } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
      res.status(400)
      throw new Error('メールアドレスは既に登録しました')
    }

    const user = await User.create({
      username,
      email,
      password,
    } as UserDocument)

    if (user) {
      //注册成功后设置session
      req.session.userInfo = user
      res.status(201).json({
        id: user.id,
        name: user.username,
        email: user.email,
      })
    } else {
      res.status(400)
      throw new Error('無効なユーザーデータ!')
    }
  })
)

router.route('/update').post(
  asyncHandler(async (req: express.Request, res: express.Response) => {
    const { username, email, password } = req.body
    const user = await User.findOne({ email })
    console.log(`user: ${user}`)
    const data = {
      password: req.body.newPassword,
      username: username,
      email: email,
    }
    //登录成功后设置session
    req.session.userInfo = data
    if (user && (await user.matchPW(password))) {
      User.findOneAndUpdate({ email }, { $set: data }, {}, (err, data) => {
        if (err) {
          console.log('error: ' + err)
        } else if (!data) {
          console.log('データが見つかりません')
          console.log(data)
        } else if (data) {
          console.log('アップデートしました！')
          console.log(data)
        }
      })
      res.status(201).json(data)
    } else {
      res.status(400)
      throw new Error('パスワードが間違いました！')
    }
  })
)

router.route('/userInfo').get((req: express.Request, res: express.Response) => {
  req.session.userInfo
    ? res.status(200).json({
        message: '',
        data: req.session.userInfo,
        code: 0,
      })
    : res.status(200).json({
        message: 'もう一度サインインしてください',
        data: req.session.userInfo,
        code: 1,
      })
})

router.route('/login').post(
  asyncHandler(async (req: express.Request, res: express.Response) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    const data = {
      id: user?._id,
      username: user?.username,
      email: user?.email,
    }
    //登录成功后设置session
    req.session.userInfo = data
    if (user && (await user.matchPW(password))) {
      res.status(201).json(data)
    } else {
      res.status(400)
      throw new Error('メールアドレスまたはパスワードが間違いました!')
    }
  })
)

router.route('/logout').get((req: express.Request, res: express.Response) => {
  req.session.destroy((err) => {
    console.log(err)
  })
  res.status(200).json({ logout: '1' })
})

export default router
