import { DefaultEventsMap, Server, Socket } from 'socket.io'
import type { AllEmits } from './emits'
import type { AllListeners } from './listeners'

export type SocketMetadata = { name: string; id: string }
export type ExtendedSocket = Socket<AllListeners, AllEmits, DefaultEventsMap, SocketMetadata>
export type ExtendedServer = Server<AllListeners, AllEmits, DefaultEventsMap, SocketMetadata>
