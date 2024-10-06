import { addPlayer, players } from '../lobby/players';
import { ExtendedServer, ExtendedSocket } from '../types/';

export default {
  name: 'login' as const,
  execute(socket: ExtendedSocket, io: ExtendedServer, data: { name: string }) {
    // console.log(io.sockets.adapter.sids.size);
    socket.data.name = data.name;
    socket.data.id = `user_${data.name}_${Date.now().toString()}_${Math.random().toString().substring(2, 9)}`;

    addPlayer({ id: socket.data.id, name: socket.data.name });

    io.emit('players_lobby', players);
    io.emit('player_join', socket.data.name);
  },
};
