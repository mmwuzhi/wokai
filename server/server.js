const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const session = require('express-session')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(
  cors({
    // 解决跨域session无效(自动重置)问题
    credentials: true,
    origin: 'http://localhost:3000',
  })
)
app.use(express.json())
app.use(cookieParser('express_react_cookie'))
app.use(
  session({
    secret: 'express_react_cookie',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 1000 * 60 * 12 }, //过期时间
  })
)

const uri = process.env.Local_URL
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

const exercisesRouter = require('./routes/exercise')
const usersRouter = require('./routes/user')
const commentsRouter = require('./routes/comment')

app.use('/exercises', exercisesRouter)
app.use('/comments', commentsRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
