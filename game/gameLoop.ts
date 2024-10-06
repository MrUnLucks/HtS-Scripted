import { turnOrder, randomizePlayersTurn } from './turnOrder'
import { io } from '..'

export const gameLoop = async () => {
  let turnNumber = 0
  const sockets = await io.sockets.fetchSockets()

  randomizePlayersTurn()
  while (turnNumber < 2) {
    for (let i = 0; i < turnOrder.length; i++) {
      const playerId = turnOrder[i]

      // Find the socket for the current player
      const socket = sockets.find((el) => el.data.id === playerId)

      if (!socket) {
        console.error(`Player ${playerId} not found`)
        continue
      }

      // Signal to the player that it's their turn
      io.emit('turn_start', { id: socket.data.id, name: socket.data.name })

      // Wait for the player to finish their turn
      await new Promise((resolve) => {
        console.log('waiting')
        socket.on(`finish_turn`, () => {
          console.log('finish turn')
          resolve(undefined)
        })
      })
    }

    turnNumber++
  }
}
