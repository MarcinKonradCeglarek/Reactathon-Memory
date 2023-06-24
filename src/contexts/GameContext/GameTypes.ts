export type Card = {
  isGuessed: boolean
  isFlipped: boolean
  symbol: string
}

export enum GameFeeback {
  Match,
  Miss,
  GameWon,
}
export type GameState = {
  cards: Array<Card>
  startTime: Date
  movesCounter: number
  feedback?: GameFeeback
}

type StartGame = {
  type: 'StartGame'
}

type FlipCard = {
  type: 'FlipCard'
  cardIdx: number
}

type UnFlipCards = {
  type: 'UnFlipCards'
  cards: number[]
}

export type GameActions = StartGame | FlipCard | UnFlipCards
