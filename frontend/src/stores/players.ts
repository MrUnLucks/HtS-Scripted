import { defineStore } from 'pinia'
import { Players } from '../../../lobby/players'
import { socket } from '../socket'

export const usePlayerStore = defineStore('player', () => {
  const myId = ref('')
  const myName = ref('')
  const players = ref<Players>()

  const initListeners = () => {
    socket.on('players_lobby', (playersLobby) => {
      players.value = playersLobby
    })
  }

  return {
    myName,
    myId,
    players,
    initListeners,
  }
})
