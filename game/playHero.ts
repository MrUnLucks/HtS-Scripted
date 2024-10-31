import { io } from '..'
import { consumeAction } from './actions'
import { DeckCard } from './deck'
import { players } from './players'

export const playHero = (heroCard: DeckCard, playerId: string) => {
  // TODO: map errors
  if (players[playerId].actions <= 0) return undefined
  if (!players[playerId].isCurrentActivePlayer) return undefined

  players[playerId].party.push(heroCard)
  io.emit('party_update', players[playerId].party)
  consumeAction(playerId, 1)
}
