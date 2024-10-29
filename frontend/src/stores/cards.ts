import { defineStore } from 'pinia'
import { socket } from '../socket'
import { DeckCard, DeckCards } from '../../../game/deck'
import { usePlayerStore } from './players'

export const useCardsStore = defineStore('cards', () => {
  const deckCount = ref(0)
  const handCards = ref<DeckCards>([])
  const party = ref<DeckCards>([])

  const draw = (numberOfCards: number) => {
    // TODO: handle frontend error
    if (usePlayerStore().actions < 0) return
    socket.emit('draw', numberOfCards)
  }
  const playCard = (card: DeckCard) => {
    socket.emit('play_card', card)
  }

  const initListeners = () => {
    socket.on('deck_count', (count) => {
      deckCount.value = count
    })
    socket.on('hand_update', (playerHand) => (handCards.value = playerHand))
    socket.on('party_update', (partyUpdated) => {
      party.value = partyUpdated
    })
  }

  return {
    initListeners,
    deckCount,
    handCards,
    party,
    draw,
    playCard,
  }
})
