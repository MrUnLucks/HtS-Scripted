import { players } from '../game/players'
import { ExtendedServer, ExtendedSocket } from '../types/'

export default {
  name: 'request_players' as const,
  execute: () => (socket: ExtendedSocket, io: ExtendedServer) => {
    socket.emit('players_lobby', players)
  },
}
