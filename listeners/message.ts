import { ExtendedServer, ExtendedSocket } from '../types/'

export default {
  name: 'message' as const,
  execute: (data: { message: string }) => (socket: ExtendedSocket, io: ExtendedServer) => {
    io.emit('message', { name: socket.data.name, message: data.message })
  },
}
