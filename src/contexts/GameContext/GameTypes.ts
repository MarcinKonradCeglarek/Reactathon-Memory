type Card = {
  isGuessed: boolean
  symbol: string
}

export type GameState = {
  cards: Array<Card>
  flippedCards: [number | undefined, number | undefined]
  startTime: Date
  movesCounter: number
}

type StartGame = {
  type: 'StartGame'
}

type FlipCard = {
  type: 'FlipCard'
  cardIdx: number
}

type FlipCardReaction = {
  type: 'FlipCardReaction'
}

export type GameActions = StartGame | FlipCard | FlipCardReaction
