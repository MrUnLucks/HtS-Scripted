import { io } from '..'
import { ExtendedSocket } from '../types'
import { consumeAction } from './actions'
import { DeckCard } from './deck'
import { players } from './players'

export const playHero = (heroCard: DeckCard, socket: ExtendedSocket) => {
  const playerId = socket.data.id
  // TODO: map errors
  if (!playerId) return
  if (players[playerId].actions <= 0) return undefined
  if (!players[playerId].isCurrentActivePlayer) return undefined

  players[playerId].party.push(heroCard)
  io.emit('party_update', players[playerId].party)
  consumeAction(playerId, 1)
}
