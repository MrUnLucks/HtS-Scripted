<script setup lang="ts">
import { useCardsStore } from './stores/cards'
import { usePlayerStore } from './stores/players'

usePlayerStore().initListeners()
useCardsStore().initListeners()
</script>
<template>
  <div class="flex flex-col gap-4 w-screen">
    {{ usePlayerStore().actions }}
    <main>
      <RouterView />
    </main>
    <Hand />
  </div>
</template>
