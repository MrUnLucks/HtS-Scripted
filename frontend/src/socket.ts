// NOTE: https://socket.io/how-to/use-with-vue#listeners-in-a-child-component
import { reactive } from 'vue'
import { io } from 'socket.io-client'

export const state = reactive({
  connected: false,
  fooEvents: [],
  barEvents: [],
})

// "undefined" means the URL will be computed from the `window.location` object
console.log(import.meta.env.VITE_SERVER_URL)
const URL = import.meta.env.VITE_SERVER_URL ?? 'http://localhost:3000'

export const socket = io(URL, { transports: ['websocket'] })

socket.on('connect', () => {
  state.connected = true
})

socket.on('disconnect', () => {
  state.connected = false
})
