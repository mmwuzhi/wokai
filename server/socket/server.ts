import express from 'express'
import mongoose from 'mongoose'

import { Chat, ChatDocument } from '../models/chat.model'

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const port = process.env.PORT_IO || 5002
const uri = process.env.ATLAS_URI ?? 'mongodb://localhost:27017/wokai' // 数据库地址

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
  socket.on('sendMsg', async (data: { name: any; msg: any }) => {
    const { name, msg } = data
    const chat = await Chat.create({
      name,
      msg,
    } as ChatDocument)
    if (chat) {
      const chats = await Chat.find().sort({ createdAt: -1 }).limit(20)
      // 向所有连接中的客户端发送当前msgList
      io.emit('recvMsg', chats)
    }
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
