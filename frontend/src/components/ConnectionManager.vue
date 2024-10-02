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
  <button @click="connect()">Connect</button>
  <button @click="disconnect()">Disconnect</button>
  <button @click="emit">Emit</button>
</template>
