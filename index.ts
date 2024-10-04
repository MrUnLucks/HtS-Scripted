// Import required modules
import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';
import cors from 'cors';

const app = express();
app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
);
app.use(express.json());

// Create an HTTPS server using the Express app instance
const server = http.createServer(app);

// Create a Socket.IO server instance and attach it to the HTTP server
const io = new Server(server);

// Start the server listening on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Socket.IO server started on http://localhost:${PORT}`);
});

type ExtendedSocket = Socket & { name?: string; id?: string };

// TODO: move all listeners to dedicated dir
io.on('connection', (socket: ExtendedSocket) => {
  console.log('client connected.');

  socket.on('message', (message: string) => {
    socket.broadcast.emit('message', { name: socket.name, message });
  });

  socket.on('login', (data: { name: string }) => {
    // console.log(io.sockets.adapter.sids.size);
    socket.name = data.name;
    socket.id = `user_${data.name}_${Date.now().toString()}_${Math.random().toString().substring(2, 9)}`;

    socket.broadcast.emit('player_join', socket.name);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
