import { initialState } from './GameContext'
import { GameActions, GameState } from './GameTypes'
import { ProcessGame as ProcessGameAndMutateDeck, shuffleArray } from './GameUtils'

export const GameReducer = (state: GameState, action: GameActions): GameState => {
  console.log('action: ', action)
  const result = GameReducerInner(state, action)
  console.log('after: ', result)
  return result
}

const GameReducerInner = (state: GameState, action: GameActions): GameState => {
  switch (action.type) {
    case 'StartGame':
      return {
        ...initialState,
        cards: shuffleArray(initialState.cards),
      }

    case 'FlipCard':
      // if card is flipped or guessed: return
      const targetCard = state.cards[action.cardIdx]
      if (targetCard.isFlipped || targetCard.isGuessed) {
        return state
      }

      // Flip card
      const twoCardsAlreadyFlipped = state.cards.filter((c) => c.isFlipped).length >= 2
      const newCards = state.cards.map((c, i) => {
        if (i !== action.cardIdx) {
          if (twoCardsAlreadyFlipped) {
            return { ...c, isFlipped: false }
          }

          return { ...c }
        }

        return { ...c, isFlipped: true }
      })

      const feedback = ProcessGameAndMutateDeck(newCards)

      return {
        ...state,
        cards: newCards,
        movesCounter: state.movesCounter + 1,
        feedback,
      }

    case 'UnFlipCards':
      const newUnflippedCards = state.cards.map((c, i) => {
        if (action.cards.includes(i)) {
          return { ...c, isFlipped: false }
        }

        return c
      })

      return {
        ...state,
        cards: newUnflippedCards,
      }
    default:
      return state
  }
}
