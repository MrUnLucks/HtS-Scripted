<script setup lang="ts">
import { computed, ref } from 'vue'
import draggable from 'vuedraggable'
import { socket } from '../socket'

const handCards = ref<any[]>()
socket.on('hand_update', (playerHand) => (handCards.value = playerHand))

const usedCardList = ref<Array<string>>(['asd'])
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
        v-model="handCards"
        item-key="name"
        @start="drag = true"
        @end="drag = false"
        v-bind="dragOptions"
      >
        <template #item="item">
          <Card v-bind="item.element" />
        </template>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Drop zone</h3>
      <draggable
        class="flex items-center justify-center p-2"
        v-model="usedCardList"
        group="externalDropZone"
        item-key="name"
      >
        <template #item="{ element }">
          <div class="list-group-item hidden">{{ element }}</div>
        </template>
      </draggable>
    </div>
  </div>
</template>
