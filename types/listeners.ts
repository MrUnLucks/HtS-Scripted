import login from '../listeners/login'
import message from '../listeners/message'
import player_ready from '../listeners/player_ready'
import disconnect from '../listeners/disconnect'
import request_players from '../listeners/request_players'
import draw from '../listeners/draw'
import play_card from '../listeners/play_card'

// Singular listeners
type FinishTurn = Record<'finish_turn', () => void>
type Test = Record<'ok', () => void>

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

type HasExecute<T> = T extends {
  execute: (...args: any) => any
}
  ? T['execute']
  : never

type HasSecondFunction<T> = T extends (...args: any) => any ? Parameters<T> : false
type IsUndefined<T> = T extends undefined ? any : T
type Payload<T> = (...args: HasSecondFunction<HasExecute<T>>) => void
export type AllListeners = Prettify<
  Record<typeof login.name, Payload<typeof login>> &
    Record<typeof message.name, Payload<typeof message>> &
    Record<typeof player_ready.name, Payload<typeof player_ready>> &
    Record<typeof request_players.name, Payload<typeof request_players>> &
    Record<typeof disconnect.name, Payload<typeof disconnect>> &
    Record<typeof draw.name, Payload<typeof draw>> &
    Record<typeof play_card.name, Payload<typeof play_card>> &
    FinishTurn &
    Test
>
