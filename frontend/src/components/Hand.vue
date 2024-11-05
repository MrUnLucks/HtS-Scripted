<script setup lang="ts">
import draggable from 'vuedraggable'
import { useCardsStore } from '../stores/cards'
import { usePlayerStore } from '../stores/players'
import { DeckCards } from '../../../game/deck'

const playCardZone = ref<DeckCards>([])
let previousPlayCardZone: DeckCards = []
watch(
  playCardZone,
  () => {
    // TODO!: not the safest option, refactor
    const cardPlayed = playCardZone.value.pop()
    if (!cardPlayed) return undefined
    console.log(cardPlayed)

    useCardsStore().playCard(cardPlayed)
    previousPlayCardZone = playCardZone.value
  },
  { deep: true },
)
const drag = ref(false)

const dragOptions = computed(() => ({
  animation: 200,
  group: 'externalDropZone',
}))
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="col-3">
      <h3>Hand:</h3>
      <draggable
        class="flex gap-2 w-full justify-center"
        :list="useCardsStore().handCards"
        item-key="id"
        @start="drag = true"
        @end="drag = false"
        v-bind="dragOptions"
      >
        <template #item="item">
          <Card v-bind="item.element" />
        </template>
      </draggable>
    </div>
    {{ playCardZone }}
    <div class="col-3" v-if="usePlayerStore().isActivePlayer">
      <h3>Drop zone</h3>
      <draggable
        class="flex items-center justify-center p-2"
        v-model="playCardZone"
        group="externalDropZone"
        item-key="id"
      >
        <template #item="{ element }">
          <div class="list-group-item hidden">{{ element }}</div>
        </template>
      </draggable>
    </div>
  </div>
</template>
