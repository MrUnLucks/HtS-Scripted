<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { socket } from '../socket';

const history = ref<string[]>([]);
const message = ref('');

const sendData = () => {
  history.value.push(`client: ${message.value}`);
  socket.emit('message', message.value);
  message.value = '';
};

onMounted(() => {
  socket.on('connect', () => {
    console.log('Connected to server');
  });

  socket.on('message', (newVal: string) => {
    history.value.push(`server: ${newVal}`);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from server');
  });
});

onUnmounted(() => {
  socket.disconnect();
});
</script>

<template>
  <div>
    <form @submit.prevent="sendData">
      <input type="text" v-model="message" />
      <button type="submit">Send</button>
    </form>
    <p v-for="message in history">{{ message }}</p>
  </div>
</template>
