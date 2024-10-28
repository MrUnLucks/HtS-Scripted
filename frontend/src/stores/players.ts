import { defineStore } from 'pinia'
import { Players } from '../../../lobby/players'
import { socket } from '../socket'

export const usePlayerStore = defineStore('player', () => {
  const myId = ref('')
  const myName = ref('')
  const actions = ref(0)
  const currentPlayer = ref<{ name: string; id: string }>({ name: '', id: '' })
  const isActivePlayer = computed(() => currentPlayer.value.id === myId.value)
  const players = ref<Players>()

  const initListeners = () => {
    socket.on('players_lobby', (playersLobby) => {
      players.value = playersLobby
    })
    socket.on('turn_start', ({ name, id }) => {
      currentPlayer.value = { name, id }
    })
    socket.on('update_actions', ({ id, numberOfActions }) => {
      actions.value = numberOfActions
    })
  }

  const finishTurn = () => {
    socket.emit('finish_turn')
  }

  return {
    initListeners,
    myName,
    myId,
    actions,
    currentPlayer,
    isActivePlayer,
    players,
    finishTurn,
  }
})
