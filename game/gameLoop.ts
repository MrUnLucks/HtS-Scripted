import { turnOrder, randomizePlayersTurn } from './turnOrder'
import { io } from '..'
import { drawInitialCards, initDeck } from './deck'
import { players } from './players'

export const gameLoop = async () => {
  let turnNumber = 0
  const sockets = Array.from(io.sockets.sockets.values())

  randomizePlayersTurn()
  initDeck()
  drawInitialCards()
  while (turnNumber < 2) {
    for (let i = 0; i < turnOrder.length; i++) {
      const playerId = turnOrder[i]
      players[playerId].isCurrentActivePlayer = true
      players[playerId].actions = 3 // TODO: different action points

      // Find the socket for the current player
      const socket = sockets.find((el) => el.data.id === playerId)

      if (!socket) {
        console.error(`Player ${playerId} not found`)
        continue
      }

      // Signal to the player that it's their turn
      io.emit('turn_start', { id: socket.data.id, name: socket.data.name })
      socket.emit('update_actions', {
        id: socket.data.id,
        numberOfActions: players[playerId].actions,
      })

      // Wait for the player to finish their turn
      await new Promise((resolve) => {
        socket.on(`finish_turn`, () => {
          resolve('')
        })
      })
      players[playerId].isCurrentActivePlayer = false
    }

    turnNumber++
  }
}
