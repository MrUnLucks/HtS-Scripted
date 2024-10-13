<script setup lang="ts">
import { ref } from 'vue'
import { socket } from '../socket'

const handCards = ref<any[]>()
socket.on('hand_update', (el) => (handCards.value = el))
</script>
<template>
  <div>
    Hand:
    <div v-for="card in handCards" class="flex justify-between">
      {{ card }}
      <img :src="`/src/assets/heroes/${card.id}.png`" class="h-[100px]" />
    </div>
  </div>
</template>
