<script setup lang="ts">
import { usePlayerStore } from '../../stores/players'
</script>
<template>
  <div class="relative border border-black w-[50px]">
    <img src="/src/assets/backs/back_card.png" alt="" />
    <p class="absolute top-0 left-1/2 -translate-x-1/2 text-gray-900">
      {{ usePlayerStore().deckCount }}
    </p>
  </div>
</template>
