import { players } from './players'

const isHeroInHand = (heroId: string, playerId: string) => {
  return players[playerId].handCards.find((el) => el.id === heroId)
}

export const playHero = (heroId: string, playerId: string) => {
  // NOTE: it should NEVER happen but handle server error
  // TODO: map errors
  if (!isHeroInHand(heroId, playerId)) return undefined
  if (players[playerId].actions <= 0) return undefined
  if (!players[playerId].isCurrentActivePlayer) return undefined
}
