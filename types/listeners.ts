import login from '../listeners/login'
import message from '../listeners/message'
import player_ready from '../listeners/player_ready'
import disconnect from '../listeners/disconnect'
import request_players from '../listeners/request_players'
import finish_turn from '../listeners/finish_turn'

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

export type AllListeners = Prettify<
  Record<typeof login.name, typeof login.execute> &
    Record<typeof message.name, typeof message.execute> &
    Record<typeof player_ready.name, typeof player_ready.execute> &
    Record<typeof disconnect.name, typeof disconnect.execute> &
    Record<typeof request_players.name, typeof request_players.execute> &
    Record<typeof finish_turn.name, typeof finish_turn.execute>
>
