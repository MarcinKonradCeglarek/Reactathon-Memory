import { GameActions, GameState } from './GameTypes'

export const GameReducer = (state: GameState, action: GameActions): GameState => {
  switch (action.type) {
    case 'StartGame':
      // shuffle cards here
      return { ...state, cards: state.cards }

    case 'FlipCard':
      // flip a card
      return state

    default:
      return state
  }
}
