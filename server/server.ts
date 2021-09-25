import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import MongoStore from 'connect-mongo'

import usersRouter from './routes/user'
import commentsRouter from './routes/comment'
import subscribeRouter from './routes/subscribe'

require('dotenv').config()

const app = express()
app.disable('x-powered-by') // 禁用X-Powered-By防止被攻击
const port = process.env.PORT_SERVER || 5001
const uri =
  process.env.ATLAS_URI ??
  'mongodb+srv://admin:zzz123@mmwuzhi.vxx6t.mongodb.net/test-app?retryWrites=true&w=majority' // 数据库地址

app.use(express.json())
app.use(cookieParser('express_react_cookie'))
app.use(
  session({
    secret: 'express_react_cookie',
    resave: false, // 若session没有变化则不保存
    saveUninitialized: false, // 若没有存新数据则不创建session
    cookie: { maxAge: 60 * 1000 * 60 * 12 }, //过期时间
    store: MongoStore.create({
      mongoUrl: uri,
      touchAfter: 24 * 60 * 60, // 24小时内只更新一次会话，不管有多少请求(会话数据上更改某些内容的除外)
    }),
  })
)
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB connection established successfully')
})

app.use('/comments', commentsRouter)
app.use('/users', usersRouter)
app.use('/subscribe', subscribeRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
