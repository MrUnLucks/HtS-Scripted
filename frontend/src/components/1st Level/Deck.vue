<script setup lang="ts">
import { socket } from '../../socket'
import { usePlayerStore } from '../../stores/players'

const drawClick = () => {
  socket.emit('draw', 1)
}
</script>
<template>
  <div>
    <div class="relative w-[50px]">
      <img src="/src/assets/backs/back_card.png" alt="" />
      <p class="absolute top-1/2 left-1/2 -translate-x-1/2 text-gray-900">
        {{ usePlayerStore().deckCount }}
      </p>
    </div>
    <button @click="drawClick">Draw</button>
  </div>
</template>
