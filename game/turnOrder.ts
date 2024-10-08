export let turnOrder: Array<string> = []
export const resetTurnOrder = () => {
  turnOrder = []
}
export const addPlayerTurn = (id: string) => {
  turnOrder.push(id)
}
export const removePlayerTurn = (id: string) => {
  const playerToRemoveIndex = turnOrder.findIndex((playerId) => playerId === id)
  turnOrder.splice(playerToRemoveIndex, 1)
}
// TODO: Better implementation possible: Fisher-Yates shuffle
export const randomizePlayersTurn = () => {
  for (let i = turnOrder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[turnOrder[i], turnOrder[j]] = [turnOrder[j], turnOrder[i]]
  }
}
