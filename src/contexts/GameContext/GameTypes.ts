type Card = {
  id: number
  isFlipped: boolean
  isGuessed: boolean
  symbol: string
}

export enum GamePhase {
  BeforeFirstMove,
  BeforeSecondMove,
  AfterSecondMove,
  Finished,
}

export type GameState = {
  cards: Array<Card>
  gamePhase: GamePhase
  startTime: Date
  movesCounter: number
}

type StartGame = {
  type: 'StartGame'
}

type FlipCard = {
  type: 'FlipCard'
  cardId: number
}

export type GameActions = StartGame | FlipCard
