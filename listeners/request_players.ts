import { players } from '../lobby/players'
import { ExtendedSocket } from '../types/'

export default {
  name: 'request_players' as const,
  execute(socket: ExtendedSocket) {
    socket.emit('players_lobby', players)
  },
}
