<template>
  <p>State: {{ connected }}</p>
</template>

<script setup lang="ts">
import { state } from '../socket';
import { computed } from 'vue';

const connected = computed(() => state.connected);
</script>
