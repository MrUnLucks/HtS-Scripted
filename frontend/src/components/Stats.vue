<script setup lang="ts">
import { usePlayerStore } from '../stores/players'

const playerStore = usePlayerStore()
const finishTurn = () => {
  playerStore.finishTurn()
}
</script>
<template>
  <div class="flex flex-col gap-2">
    <p>Current player: {{ usePlayerStore().currentPlayer }}</p>
    <button @click="finishTurn">Finish Turn</button>
    <p>MyID:{{ playerStore.myId }}</p>
  </div>
</template>
