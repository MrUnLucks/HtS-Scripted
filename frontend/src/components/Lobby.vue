<script setup lang="ts">
import { socket } from '../socket'
import { usePlayerStore } from '../stores/players'

onMounted(() => {
  socket.emit('request_players')
})

const players = computed(() => usePlayerStore().players)

const readyHandler = () => {
  socket.emit('player_ready')
}

socket.on('game_start', () => {})
</script>
<template>
  <div class="flex flex-col gap-6">
    <button @click="readyHandler">Ready!</button>
    <p class="text-emerald-500 text-xl">Lobby:</p>
    <div v-for="player in players" class="flex gap-2 items-center justify-center">
      <p>{{ player.name }}</p>
      <ReadyIcon :is-ready="player.ready" />
    </div>
  </div>
</template>
