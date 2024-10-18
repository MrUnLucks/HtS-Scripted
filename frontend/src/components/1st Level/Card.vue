<script setup lang="ts">
import { CardProps } from './Card.props'
defineProps<CardProps>()
</script>
<template>
  <div class="flex flex-col gap-2 p-2 items-center">
    <p class="">{{ name }}</p>
    <div>
      <img
        :src="`/src/assets/playingcards/${id}.png`"
        class="h-[100px] pointer-events-none noselect"
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>
