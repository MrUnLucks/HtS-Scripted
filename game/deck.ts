import { io } from '..'
import db from '../db.json'
import { players } from '../lobby/players'

export const allHeroes = db.heroes
export type Heroes = Array<
  Omit<(typeof allHeroes)[number], 'effect'> & {
    effect: Function
  }
>
export const allModifiers = db.modifiers
export type Modifiers = Array<
  Omit<(typeof allModifiers)[number], 'effect'> & {
    effect: Function
  }
>
export type DeckCards = Array<Heroes[number] | Modifiers[number]>
export let deck: DeckCards = []

function shuffleArray() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[deck[i], deck[j]] = [deck[j], deck[i]]
  }
}

export const resetDeck = () => {
  deck = []
}

export const initDeck = () => {
  resetDeck()
  allHeroes.forEach((hero) =>
    deck.push({ ...hero, effect: new Function(hero.effect.arguments, hero.effect.body) }),
  )
  allModifiers.forEach((modifier) => {
    for (let i = 0; i < modifier.count; i++) {
      deck.push(modifier)
    }
  })
  shuffleArray()
  io.emit('deck_count', deck.length)
}

export const drawInitialCards = () => {
  const NUMBER_OF_CARDS = 3
  // TODO: check remaining cards
  const playersId = Object.keys(players)
  playersId.forEach((playerId) => {
    let playerHand = players[playerId].handCards
    playerHand = deck.splice(0, NUMBER_OF_CARDS)
    console.log(deck.map((el) => el.id))

    io.sockets.sockets.forEach((socket) => {
      if (playerId === socket.data.id) {
        socket.emit('hand_update', playerHand)
      }
    })
  })
}
