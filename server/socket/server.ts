import express from 'express'
import mongoose from 'mongoose'
import { Chat } from '../models/chat.model'

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const uri =
  'mongodb+srv://admin:zzz123@mmwuzhi.vxx6t.mongodb.net/test-app?retryWrites=true&w=majority' // 数据库地址

const port = 3333

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

app.get('/', (req: express.Request, res: express.Response) => {
  res.status(201)
})
/** 在线人数 */
let count = 0

// @ts-ignore
io.on('connection', (socket) => {
  count++
  io.emit('sysMsg', count)
  console.log(`connection,online: ${count}`)
  // 监视获取当前msgList和在线人数请求
  socket.on('reqMsg', () => {
    // 向发送请求的客户端发送当前msgList和在线人数
    socket.emit('sysMsg', count)
    Chat.find()
      .sort({ createdAt: -1 })
      .limit(20)
      .then((chats: any) => {
        socket.emit('recvMsg', chats)
      })
  })
  // 监视发送msg请求
  socket.on('sendMsg', (data: { name: any; msg: any }) => {
    const { name, msg } = data
    const newChat = new Chat({
      name,
      msg,
    })
    newChat.save().then(async () => {
      const chats = await Chat.find().sort({ createdAt: -1 }).limit(20)
      // 向所有连接中的客户端发送当前msgList
      io.emit('recvMsg', chats)
    })
  })
  // socket.broadcast.to('socketId').emit('hi', 'hi') //给指定人发送
  // 有客户端断开连接时更新所有连接中的客户端的在线人数
  socket.on('disconnect', () => {
    count--
    io.emit('sysMsg', count)
    console.log(`disconnect, online: ${count}`)
  })
})
http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`)
})
