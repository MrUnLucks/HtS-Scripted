<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { socket } from '../socket'
import { usePlayerStore } from '../stores/player'

const playerStore = usePlayerStore()

const nameModelValue = ref('Asd')

onMounted(() => {
  socket.disconnect()
  submitName()
})

const submitName = () => {
  socket.connect()
  socket.emit('login', { name: nameModelValue.value })
  playerStore.myName = nameModelValue.value
  socket.on('your_id', (id) => {
    playerStore.myId = id
  })
}
</script>

<template>
  <!-- <div class="flex flex-col gap-4">
    <p class="text-xl">Name:</p>
    <div class="flex gap-2">
      <input @keyup.enter="submitName" type="text" v-model="nameModelValue" />
      <button @click="submitName" type="submit">Send</button>
    </div>
  </div> -->
</template>
