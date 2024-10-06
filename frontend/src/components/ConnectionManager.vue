<script setup lang="ts">
import { computed } from 'vue'
import { socket, state } from '../socket'

const connect = () => {
  socket.connect()
}

const disconnect = () => {
  socket.disconnect()
}

const connected = computed(() => state.connected)
</script>

<template>
  <div class="flex flex-col gap-4">
    <p>State: {{ connected }}</p>
    <div class="flex gap-4">
      <button class="rounded-lg border-2 border-gray-500" @click="connect()">Connect</button>
      <button @click="disconnect()">Disconnect</button>
    </div>
  </div>
</template>
