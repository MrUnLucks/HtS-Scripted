<script setup lang="ts">
import { ref, watch } from "vue";
import { useWebSocket } from "@vueuse/core";
const { status, data, send, open, close } = useWebSocket(`ws://localhost:3000`);

watch(data, (newVal) => {
  history.value.push(`server: ${newVal}`);
});

const history = ref<string[]>([]);
const message = ref("");
const sendData = () => {
  history.value.push(`client: ${message.value}`);
  send(message.value);
  message.value = "";
};
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
