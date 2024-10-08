// TODO: modularize
type turn_start = (data: { id: string; name: string }) => void
type finish_turn = () => void
type your_id = (id: string) => void

export type AllEmits = {
  turn_start: turn_start
  finish_turn: finish_turn
  your_id: your_id
}
