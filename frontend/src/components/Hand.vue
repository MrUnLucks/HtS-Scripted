<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import { socket } from '../socket'

const handCards = ref<any[]>()
socket.on('hand_update', (playerHand) => (handCards.value = playerHand))

const list2 = ref<Array<string>>(['asd'])
const drag = ref(false)
const dragOptions = {
  animation: 200,
  group: 'externalDropZone',
  disabled: false,
  ghostClass: 'ghost',
}
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
          <Card class="transition-transform ease-in duration-150" v-bind="item.element" />
        </template>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Drop zone</h3>
      <draggable
        class="flex items-center justify-center p-2"
        :list="list2"
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
