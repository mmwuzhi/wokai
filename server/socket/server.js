const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http, { cors: true })
const mongoose = require('mongoose')
let Chat = require('../models/chat.model')

const uri =
  'mongodb+srv://admin:zzz123@mmwuzhi.vxx6t.mongodb.net/test-app?retryWrites=true&w=majority' // 数据库地址

const port = 3333

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

app.get('/', (req, res) => {
  res.status(201)
})

let count = 0

io.on('connection', (socket) => {
  count++
  io.emit('sysMsg', count)
  Chat.find()
    .sort({ createdAt: -1 })
    .limit(20)
    .then((chats) => {
      io.emit('recvMsg', chats)
    })
  console.log(`connection,online: ${count}`)

  socket.on('sendMsg', (data) => {
    const { name, msg } = data
    const newChat = new Chat({
      name,
      msg,
    })
    newChat.save().then(async () => {
      const chats = await Chat.find().sort({ createdAt: -1 }).limit(20)
      io.emit('recvMsg', chats)
    })
  })

  socket.on('disconnect', () => {
    count--
    io.emit('sysMsg', count)
    console.log(`disconnect, online: ${count}`)
  })
})
http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`)
})
