<script setup lang="ts">
import { ReadyIconProps } from './ReadyIcon.props';

defineProps<ReadyIconProps>();
</script>

<template>
  <div
    class="rounded-full h-2 w-2"
    :class="{ 'bg-red-500': !isReady, 'bg-emerald-400': isReady }"
  />
</template>
