import { io } from '..'
import { consumeAction } from './actions'
import { players } from './players'

export const playHero = (heroId: string, playerId: string) => {
  // TODO: map errors
  const card = players[playerId].handCards.find((el) => el.id === heroId)
  console.log(card)
  if (!card) return undefined
  if (players[playerId].actions <= 0) return undefined
  if (!players[playerId].isCurrentActivePlayer) return undefined

  players[playerId].board.push(card)
  io.emit('play_hero', card)
  consumeAction(playerId, 1)
}
