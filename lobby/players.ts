import { Leaders } from '../game/assignLeader'
import { DeckCards } from '../game/deck'

export type Player = {
  id: string
  ready: boolean
  name: string
  leader?: Leaders[number]
  handCards: DeckCards
  actions: number
  isCurrentActivePlayer: boolean
}
export const players: { [id: string]: Player } = {}
export const playersLength = Object.keys(players).length
export type Players = typeof players

export const addPlayer = (player: { id: string; name: string }) => {
  players[player.id] = {
    id: player.id,
    ready: false,
    name: player.name,
    handCards: [],
    actions: 3,
    isCurrentActivePlayer: false,
  }
}

export const removePlayer = (playerId: string) => {
  delete players[playerId]
}

export const setPlayerReady = (playerId: string, ready: boolean = true) => {
  const targetPlayer = players[playerId]
  if (!targetPlayer) return
  targetPlayer.ready = ready
}

export const resetReadyAllPlayers = () => {
  Object.values(players).forEach((player) => {
    player.ready = false
  })
}

export const areAllPlayersReady = (): boolean => {
  return Array.from(Object.values(players)).every((player) => player.ready)
}
