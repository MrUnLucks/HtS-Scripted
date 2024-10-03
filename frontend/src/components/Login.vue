<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { socket } from '../socket';

const name = ref();
const router = useRouter();

const submitName = () => {
  socket.connect();
  socket.emit('set_name', { name: name.value });
  router.push('/test');
};
</script>

<template>
  <p class="text-xl">Name:</p>
  <input @keyup.enter="submitName" type="text" v-model="name" />
</template>
