import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePlayerStore = defineStore('player', () => {
  const myId = ref('')
  const myName = ref('')

  return {
    myName,
    myId,
  }
})
