import { GameActions, GameState } from './GameTypes'

export const GameReducer = (state: GameState, action: GameActions): GameState => {
  switch (action.type) {
    case 'StartGame':
      // shuffle cards here
      return { ...state, cards: state.cards }

    case 'FlipCard':
      return {
        ...state,
        movesCounter: state.movesCounter + 1,
        cards: state.cards.map((c) => {
          if (c.id !== action.cardId) {
            return c
          }

          return { ...c, isFlipped: !c.isFlipped }
        }),
      }

    default:
      return state
  }
}
