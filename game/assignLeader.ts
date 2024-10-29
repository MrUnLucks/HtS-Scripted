import db from '../db.json'
import { players } from './players'
import { io } from '..'

// TODO: global type for common types like leaders,players, heroes etc..
export type Leaders = typeof db.leaders
export const leadersAvailable: Leaders = db.leaders
export const assignLeaders = () => {
  // FEATURE: Division logic here if more than 1 choice per player
  Object.values(players).forEach((player) => {
    let randomIndex = Math.floor(Math.random() * leadersAvailable.length)
    if (randomIndex > leadersAvailable.length - 1) {
      randomIndex = 0
    }
    player.leader = leadersAvailable.splice(randomIndex, 1)[0]
    console.log({ id: player.id, leader: player.leader })

    io.emit('leader', { id: player.id, leader: player.leader })
  })
}
