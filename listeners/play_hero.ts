import { playHero } from '../game/playHeroes'
import { ExtendedServer, ExtendedSocket } from '../types/'

export default {
  name: 'play_hero' as const,
  execute: (heroId: string) => (socket: ExtendedSocket, _: ExtendedServer) => {
    playHero(heroId, socket.data.id)
  },
}
