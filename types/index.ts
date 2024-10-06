import { DefaultEventsMap, Server, Socket } from 'socket.io';
// import type emits from './emits';
import type { AllListeners } from './listeners';

export type SocketData = { name: string; id: string };
export type ExtendedSocket = Socket<AllListeners, DefaultEventsMap, DefaultEventsMap, SocketData>;
export type ExtendedServer = Server<AllListeners, DefaultEventsMap, DefaultEventsMap, SocketData>;
