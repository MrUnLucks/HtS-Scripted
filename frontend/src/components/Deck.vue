<script setup lang="ts">
import { useCardsStore } from '../stores/cards'
</script>
<template>
  <div class="flex flex-col gap-2 items-center">
    <div class="relative w-[50px]">
      <img src="/src/assets/backs/back_card.png" alt="" />
      <p class="absolute top-1/2 left-1/2 -translate-x-1/2 text-gray-900">
        {{ useCardsStore().deckCount }}
      </p>
    </div>
    <button class="w-fit" @click="useCardsStore().draw(1)">Draw</button>
  </div>
</template>
