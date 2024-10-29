import { DeckCard } from '../game/deck'
import { players } from '../game/players'
import { playHero } from '../game/playHeroes'
import { ExtendedServer, ExtendedSocket } from '../types'

export default {
  name: 'play_card' as const,
  execute: (card: DeckCard) => (socket: ExtendedSocket, _: ExtendedServer) => {
    const playerHand = players[socket.data.id].handCards
    const cardPlayed = playerHand.find((el) => el.id === card.id)
    // TODO: map errors
    if (!cardPlayed) return undefined

    const cardPlayedIndex = playerHand.findIndex((el) => el.id === card.id)
    playerHand.splice(cardPlayedIndex, 1)
    // TODO: global const type for all card types
    if (card.type === 'hero') {
      playHero(card, socket.data.id)
    }
  },
}
