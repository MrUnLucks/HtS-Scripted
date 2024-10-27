import { defineStore } from 'pinia'
import { Players } from '../../../lobby/players'
import { socket } from '../socket'

export const usePlayerStore = defineStore('player', () => {
  const myId = ref('')
  const myName = ref('')
  const players = ref<Players>()
  const deckCount = ref(0)

  const initListeners = () => {
    socket.on('players_lobby', (playersLobby) => {
      players.value = playersLobby
    })
    socket.on('deck_count', (count) => {
      deckCount.value = count
    })
  }

  return {
    myName,
    myId,
    players,
    initListeners,
    deckCount,
  }
})
