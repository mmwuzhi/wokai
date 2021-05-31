const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http, { cors: true })
const port = 3333

app.get('/', (req, res) => {
      res.status(201)
})

io.on('connection', (socket) => {
  socket.on('sendmsg', (data) => {
    io.emit('recvmsg', data)
  })
})
http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`)
})
