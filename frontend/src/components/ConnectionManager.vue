<script setup lang="ts">
import { socket } from '../socket';

const connect = () => {
  socket.connect();
};

const disconnect = () => {
  socket.disconnect();
};

const emit = () => {
  socket.emit('message', 'payload');
};
</script>

<template>
  <div class="flex gap-4">
    <button class="rounded-lg border-2 border-gray-500" @click="connect()">Connect</button>
    <button @click="disconnect()">Disconnect</button>
    <button @click="emit">Emit</button>
  </div>
</template>
