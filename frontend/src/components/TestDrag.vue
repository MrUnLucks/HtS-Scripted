<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import { socket } from '../socket'

const handCards = ref<any[]>()
socket.on('hand_update', (playerHand) => (handCards.value = playerHand))

const list2 = ref<Array<string>>(['asd'])
const drag = ref(false)
</script>

<template>
  <div class="row">
    <div class="col-3">
      <h3>Hand:</h3>
      <draggable
        class="list-group flex gap-2"
        :list="handCards"
        group="externalDropZone"
        item-key="name"
        @start="drag = true"
        @end="drag = false"
      >
        <template #item="item">
          <Card class="transition-transform ease-in duration-150" v-bind="item.element" />
        </template>
      </draggable>
    </div>

    <div class="col-3">
      <h3>Drop zone</h3>
      <draggable
        class="list-group flex items-center justify-center p-2"
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
