import { areAllPlayersReady, players, setPlayerReady } from '../lobby/players';
import { ExtendedServer, ExtendedSocket } from '../types/';

export default {
  name: 'player_ready' as const,
  execute(socket: ExtendedSocket, io: ExtendedServer) {
    setPlayerReady(socket.data.id);
    io.emit('players_lobby', players);
    if (areAllPlayersReady()) {
      io.emit('game_start');
    }
  },
};
