<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { socket } from '../socket';

const name = ref();
const router = useRouter();

const submitName = () => {
  socket.connect();
  socket.emit('login', { name: name.value });
  router.push('/test');
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <p class="text-xl">Name:</p>
    <div class="flex gap-2">
      <input @keyup.enter="submitName" type="text" v-model="name" />
      <button @click="submitName" type="submit">Send</button>
    </div>
  </div>
</template>
