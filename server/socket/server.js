const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http, { cors: true })
const port = 3333

app.get('/', (req, res) => {
      res.status(201)
})

let count = 0

io.on('connection', (socket) => {
  count++
    console.log(`connection,online: ${count}`)
  socket.on('sendmsg', (data) => {
    io.emit('recvmsg', data)
  })
  socket.on('disconnect',  ()=> {
  count--
    console.log(`disconnect, online: ${count}`)
  })
})
http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`)
})
