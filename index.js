const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const socketRouter = require('./socket/router.js')
const router = require('./routes/index')

app.set('view engine', 'pug')

app.use('/', router)

io.on('connection', (socket) => {
	console.log('a user connected')
	socketRouter.route(socket)
})

http.listen(3000, () => {
  console.log('listening on *:3000')
})
