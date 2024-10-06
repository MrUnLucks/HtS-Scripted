import { ExtendedServer, ExtendedSocket } from '../types/';

export default {
  name: 'message' as const,
  execute(socket: ExtendedSocket, io: ExtendedServer, message: string) {
    console.log(socket.data.name);

    io.emit('message', { name: socket.data.name, message });
  },
};
