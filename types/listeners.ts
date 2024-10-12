import login from '../listeners/login'
import message from '../listeners/message'
import player_ready from '../listeners/player_ready'
import disconnect from '../listeners/disconnect'
import request_players from '../listeners/request_players'
import finish_turn from '../listeners/finish_turn'

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

type GenericExecute<T> = T extends { execute: (...args: infer A) => any } ? A : never

type Payload<T> = GenericExecute<T> extends { 2: unknown } ? GenericExecute<T>[2] : undefined

export type AllListeners = Prettify<
  Record<typeof login.name, Payload<typeof login>> &
    Record<typeof message.name, Payload<typeof message>> &
    Record<typeof player_ready.name, Payload<typeof player_ready>> &
    Record<typeof request_players.name, typeof request_players> &
    Record<typeof finish_turn.name, typeof finish_turn>
>
