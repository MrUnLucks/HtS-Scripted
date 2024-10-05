import { Socket } from 'socket.io';

export type ExtendedSocket = Socket & { name?: string; id?: string };
