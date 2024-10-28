import { draw } from '../game/deck'
import { ExtendedSocket } from '../types/'

export default {
  name: 'draw' as const,
  execute: (numberOfCards: number) => (socket: ExtendedSocket) => {
    console.log(socket.id)

    draw(socket.data.id, numberOfCards)
  },
}
