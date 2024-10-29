import { io } from '..'
import { players } from './players'

export const consumeAction = (playerId: string, numberOfActions: number) => {
  // NOTE: it should NEVER happen but handle client error for negative ActionPs
  const remainingActions = players[playerId].actions - numberOfActions
  if (remainingActions < 0) return undefined
  players[playerId].actions -= numberOfActions
  io.emit('update_actions', { id: playerId, numberOfActions: players[playerId].actions })
}
