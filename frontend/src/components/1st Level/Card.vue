<script setup lang="ts">
import { CardProps } from './Card.props'

defineProps<CardProps>()

// TODO: drag on zoom is bugged
const card = ref<HTMLElement>()
const { pressed } = useMousePressed({ target: card })
const longPressedHook = ref(false)

// const zoom = computed(() => pressed.value && longPressedHook.value)
const zoom = computed(() => false)

watch(pressed, () => {
  if (!pressed.value) {
    longPressedHook.value = false
  }
})

onLongPress(card, (e) => (longPressedHook.value = true), {
  distanceThreshold: 24,
  delay: 400,
})
</script>
<template>
  <div class="relative no-drag">
    <div ref="card" class="card__container flex flex-col gap-2 p-2 items-center">
      <p class="card__name noselect">{{ name }}</p>
      <div>
        <img
          :src="`/src/assets/playingcards/${id}.png`"
          class="card__image h-[100px] noselect pointer-events-none"
        />
      </div>
    </div>
    <div
      class="card__image-zoom-alpha-layer fixed md:absolute z-[100] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-fit w-screen md:w-[50vw] p-4"
      v-show="zoom"
    >
      <img
        class="card__image-zoomed h-full w-full noselect"
        :src="`/src/assets/playingcards/${id}.png`"
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
