<script setup lang="ts">
import { socket } from '../socket'
import { usePlayerStore } from '../stores/player'

const playerStore = usePlayerStore()
const finishTurn = () => {
  socket.emit('finish_turn')
}
const currentPlayer = ref('')

socket.on('turn_start', ({ name, id }) => {
  currentPlayer.value = id === playerStore.myId ? 'Myself' : name
})
</script>
<template>
  <div class="flex flex-col gap-2">
    <p>Current player: {{ currentPlayer }}</p>
    <button @click="finishTurn">Finish Turn</button>
    <p>MyID:{{ playerStore.myId }}</p>
  </div>
</template>
