import { DeckCards } from '../game/deck'
import { Player, Players } from '../lobby/players'

// TODO: modularize
type turn_start = (data: { id: string; name: string }) => void
type leader = (data: { id: Player['id']; leader: Player['leader'] }) => void
type deck_count = (deck_count: number) => void
type hand_update = (hand: DeckCards) => void
type players_lobby = (players: Players) => void
type player_join = (name: string) => void
type message = (data: { name: string; message: string }) => void
type login = () => void
type finish_turn = () => void
type your_id = (id: string) => void
type game_start = () => void

export type AllEmits = {
  deck_count: deck_count
  hand_update: hand_update
  leader: leader
  turn_start: turn_start
  your_id: your_id
  players_lobby: players_lobby
  player_join: player_join
  message: message
  login: login
  finish_turn: finish_turn
  game_start: game_start
}
