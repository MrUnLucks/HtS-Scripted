import { ExtendedSocket } from '../types';

export default {
  name: 'login',
  execute(socket: ExtendedSocket, data: { name: string }) {
    socket.name = data.name;
    socket.id = `user_${data.name}_${Date.now().toString()}_${Math.random().toString().substring(2, 9)}`;

    socket.broadcast.emit('player_join', socket.name);
  },
};
