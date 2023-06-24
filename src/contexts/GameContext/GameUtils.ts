import { Card, GameFeeback } from './GameTypes'

export function shuffleArray<T>(input: T[]): T[] {
  return input
    .map((o) => ({ val: o, order: Math.random() }))
    .sort((a, b) => a.order - b.order)
    .map((o) => ({ ...o.val }))
}

export function ProcessGame(cards: Card[]) {
  let feedback = undefined

  // Determine if we're after 2nd move - check if 2 identical cards were found, set isGuessed
  const flippedCards = cards.filter((c) => c.isFlipped)
  if (flippedCards.length === 2) {
    if (flippedCards[0].symbol == flippedCards[1].symbol) {
      flippedCards[0].isFlipped = false
      flippedCards[1].isFlipped = false
      flippedCards[0].isGuessed = true
      flippedCards[1].isGuessed = true
      feedback = GameFeeback.Match
    } else {
      feedback = GameFeeback.Miss
    }
  }

  if (cards.every((c) => c.isGuessed)) {
    feedback = GameFeeback.GameWon
  }

  return feedback
}
