import { defineStore } from 'pinia'
import { socket } from '../socket'
import { DeckCards } from '../../../game/deck'

export const useCardsStore = defineStore('cards', () => {
  const deckCount = ref(0)
  const handCards = ref<DeckCards>()

  const initListeners = () => {
    socket.on('deck_count', (count) => {
      deckCount.value = count
    })
    socket.on('hand_update', (playerHand) => (handCards.value = playerHand))
  }

  return {
    initListeners,
    deckCount,
    handCards,
  }
})
