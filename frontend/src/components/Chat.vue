<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { socket } from '../socket'

const history = ref<string[]>([])
const message = ref('')

const sendData = () => {
  socket.emit('message', message.value)
  message.value = ''
}

onMounted(() => {
  socket.on('message', (data) => {
    history.value.push(`${data.name} : ${data.message}`)
  })

  socket.on('player_join', (name: string) => {
    history.value.push(`Player join: ${name}`)
  })
})
</script>

<template>
  <div>
    <form @submit.prevent="sendData">
      <div class="flex flex-col gap-4">
        <label for="">Chat:</label>
        <div class="flex gap-2">
          <input type="text" v-model="message" /><button type="submit">Send</button>
        </div>
      </div>
    </form>
    <p v-for="message in history">{{ message }}</p>
  </div>
</template>
