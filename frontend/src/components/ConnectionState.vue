<script setup lang="ts">
import { state } from '../socket';

const connected = computed(() => state.connected);
</script>
<template>
  <p>State: {{ connected }}</p>
</template>
