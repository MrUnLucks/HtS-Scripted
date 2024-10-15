<script setup lang="ts">
import { ref } from 'vue'
import { socket } from '../socket'
import { useSortable } from '@vueuse/integrations/useSortable' //https://vueuse.org/integrations/useSortable/

// const el = ref<HTMLElement | null>(null)
const handCards = ref<any[]>()
socket.on('hand_update', (playerHand) => (handCards.value = playerHand))

const el = ref<HTMLElement | null>(null)
const { option } = useSortable(el, handCards, {
  animation: 150,
})
</script>
<template>
  <div ref="el" class="flex gap-2 p-4 w-300px h-200px m-auto bg-gray-500/5 rounded">
    <div v-for="card in handCards" :key="card.id" class="h20 bg-gray-500/5 rounded p-3">
      <Card v-bind="card" />
    </div>
  </div>
  {{ handCards }}
</template>
