import { removePlayerTurn } from '../game/turnOrder'
import { removePlayer } from '../lobby/players'
import { ExtendedSocket } from '../types/'

export default {
  name: 'disconnect' as const,
  execute(socket: ExtendedSocket) {
    removePlayer(socket.data.id)
    removePlayerTurn(socket.data.id)
    console.log('Client disconnected')
  },
}
