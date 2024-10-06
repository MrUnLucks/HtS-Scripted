<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { socket } from '../socket';
import { useRouter } from 'vue-router';
const router = useRouter();

onMounted(() => {
  socket.emit('request_players');
});

// TODO: unify type payload for BE and FE
type PlayerReadyState = { name: string; ready: boolean; id: string };

const players = ref<any>();
socket.on('players_lobby', (playersLobby: any) => {
  players.value = playersLobby;
});

const readyHandler = () => {
  socket.emit('player_ready');
};

socket.on('game_start', () => {
  router.push('/test');
});
</script>
<template>
  <div class="flex flex-col gap-6">
    <button @click="readyHandler">Ready!</button>
    <p class="text-emerald-500 text-xl">Lobby:</p>
    <div v-for="player in players" class="flex gap-2 items-center justify-center">
      <p>{{ player.name }}</p>
      <ReadyIcon :is-ready="player.ready" />
    </div>
  </div>
</template>
