import { consumeAction } from '../game/actions'
import { draw } from '../game/deck'
import { players } from '../game/players'
import { ExtendedSocket } from '../types/'

export default {
  name: 'draw' as const,
  execute: (numberOfCards: number) => (socket: ExtendedSocket) => {
    if (players[socket.data.id].actions <= 0) return undefined
    if (!players[socket.data.id].isCurrentActivePlayer) return undefined

    draw(socket.data.id, numberOfCards)
    consumeAction(socket.data.id, 1)
  },
}
