import { Server } from 'socket.io'
import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url!, true)
    handle(req, res, parsedUrl)
  })

  const io = new Server(server)

  io.on('connection', (socket) => {
    console.log('A user connected')

    socket.on('updateKanban', (data) => {
      socket.broadcast.emit('kanbanUpdated', data)
    })

    socket.on('updateDashboard', (data) => {
      socket.broadcast.emit('dashboardUpdated', data)
    })

    socket.on('updateMetrics', (data) => {
      socket.broadcast.emit('metricsUpdated', data)
    })

    socket.on('disconnect', () => {
      console.log('A user disconnected')
    })
  })

  server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
  })
})

