// Import required modules
import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import { ExtendedServer } from './types/'
import fs from 'fs'

const app = express()
app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
)
app.use(express.json())

// Create an HTTPS server using the Express app instance
const server = http.createServer(app)

// Create a Socket.IO server instance and attach it to the HTTP server
export const io: ExtendedServer = new Server(server)

// Start the server listening on port 3000
const PORT = 3000
server.listen(PORT, () => {
  console.log(`Socket.IO server started on http://localhost:${PORT}`)
})

const listenersFiles = fs.readdirSync('./listeners').filter((file) => file.endsWith('.ts'))

io.on('connection', async (socket) => {
  console.log('client connected.')
  for (const file of listenersFiles) {
    const rawListener = await import(`./listeners/${file}`)
    const listener = rawListener.default
    if (!listener) console.error(`listener ${listener} does not contain a default import!`)
    socket.on(listener.name, (...args: any[]) => listener.execute(socket, io, ...args))
  }
})
