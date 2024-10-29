import { io } from '..'
import { players } from './players'

export const consumeAction = (playerId: string, numberOfActions: number) => {
  // TODO: map errors
  if (!players[playerId].isCurrentActivePlayer) return undefined
  const remainingActions = players[playerId].actions - numberOfActions
  if (remainingActions < 0) return undefined
  players[playerId].actions -= numberOfActions
  io.emit('update_actions', { id: playerId, numberOfActions: players[playerId].actions })
}
