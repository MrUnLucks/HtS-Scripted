import { io } from '..'
import db from '../db.json'
import { players } from './players'

export const allHeroes = db.heroes
export type Hero = Omit<(typeof allHeroes)[number], 'effect'> & {
  effect: Function
}

export const allModifiers = db.modifiers
export type Modifier = Omit<(typeof allModifiers)[number], 'effect'> & {
  effect?: Function
}

export const allChallenges = db.challenges
export type Challenge = (typeof allChallenges)[number]

export type DeckCard = Hero | Modifier | Challenge
export type DeckCards = Array<DeckCard>

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
    // TODO: modularize count insert
    for (let i = 0; i < modifier.count; i++) {
      deck.push({
        ...modifier,
        effect: new Function(modifier.effect.arguments, modifier.effect.body),
      })
    }
  })
  allChallenges.forEach((challenge) => {
    for (let i = 0; i < challenge.count; i++) {
      deck.push(challenge)
    }
  })
  shuffleArray()
  io.emit('deck_count', deck.length)
}

export const draw = (playerId: string, numberOfCards: number) => {
  let playerHand = players[playerId].handCards
  const drawedCards = deck.splice(0, numberOfCards)
  drawedCards.forEach((cardDrawed) => {
    playerHand.push(cardDrawed)
  })
  io.sockets.sockets.forEach((socket) => {
    if (playerId === socket.data.id) {
      socket.emit('hand_update', playerHand)
    }
  })
  io.emit('hand_count', { id: playerId, count: playerHand.length })
  io.emit('deck_count', deck.length)
}

export const drawInitialCards = () => {
  const NUMBER_OF_CARDS = 3
  // TODO: check remaining cards
  const playersId = Object.keys(players)
  playersId.forEach((playerId) => {
    draw(playerId, NUMBER_OF_CARDS)
  })
}
