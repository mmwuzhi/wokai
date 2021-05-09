const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const session = require('express-session')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

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

const uri = process.env.ATLAS_URI
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

const usersRouter = require('./routes/user')
const commentsRouter = require('./routes/comment')

app.use('/comments', commentsRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
