<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { socket } from '../socket'
import { usePlayerStore } from '../stores/player'

const { myId } = usePlayerStore()

const history = ref<string[]>([])
const message = ref('')

const sendData = () => {
  socket.emit('message', message.value)
  message.value = ''
}

// TODO: move all types to dedicated module
type MessagePayload = { name: string; message: string }

onMounted(() => {
  socket.on('message', (data: MessagePayload) => {
    history.value.push(`${data.name} : ${data.message}`)
  })

  socket.on('player_join', (name: string) => {
    history.value.push(`Player join: ${name}`)
  })
})

const currentPlayer = ref('')

socket.on('turn_start', ({ name, id }: { name: string; id: string }) => {
  currentPlayer.value = id === myId ? 'Myself' : name
})

const finishTurn = () => {
  socket.emit('finish_turn')
}
</script>

<template>
  <div>
    <form @submit.prevent="sendData">
      <input type="text" v-model="message" />
      <button type="submit">Send</button>
    </form>
    <p v-for="message in history">{{ message }}</p>
    <p>Current player: {{ currentPlayer }}</p>
    <button @click="finishTurn">Finish Turn</button>
    <p>MyID:{{ myId }}</p>
  </div>
</template>
