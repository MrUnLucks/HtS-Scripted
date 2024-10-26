import { addPlayerTurn } from '../game/turnOrder'
import { addPlayer, players } from '../lobby/players'
import { ExtendedServer, ExtendedSocket } from '../types/'

export default {
  name: 'login' as const,
  execute: (data: { name: string }) => (socket: ExtendedSocket, io: ExtendedServer) => {
    // console.log(io.sockets.adapter.sids.size);
    socket.data.name = data.name
    socket.data.id = `${data.name.toLowerCase()}_${Math.random().toString().substring(2, 9)}`

    addPlayer({ id: socket.data.id, name: socket.data.name })
    addPlayerTurn(socket.data.id)

    io.emit('players_lobby', players)
    socket.emit('your_id', socket.data.id)
    io.emit('player_join', socket.data.name)
  },
}
