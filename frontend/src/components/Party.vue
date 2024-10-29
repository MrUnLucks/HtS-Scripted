<script setup lang="ts">
import { useCardsStore } from '../stores/cards'
</script>

<template>
  <div>
    Party:
    <div class="flex gap-4 justify-center">
      <div v-for="card in useCardsStore().party">
        <Card v-bind="card" />
      </div>
    </div>
  </div>
</template>
