import { removePlayer } from '../lobby/players';
import { ExtendedSocket } from '../types/';

export default {
  name: 'disconnect' as const,
  execute(socket: ExtendedSocket) {
    removePlayer(socket.data.id);
    console.log('Client disconnected');
  },
};