import { draw } from '../game/deck'
import { ExtendedSocket } from '../types/'

export default {
  name: 'draw' as const,
  execute: (numberOfCards: number) => (socket: ExtendedSocket) => {
    draw(socket.id, numberOfCards)
  },
}
