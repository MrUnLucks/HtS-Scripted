<script setup lang="ts">
import { usePlayerStore } from './stores/players'

usePlayerStore().initListeners()
</script>
<template>
  <div class="flex flex-col gap-4 w-screen">
    {{ usePlayerStore().players }}
    <main>
      <RouterView />
    </main>
    <Hand />
  </div>
</template>
