import { FC, ReactElement, createContext, useReducer } from 'react'
import { GameActions, GameState } from './GameTypes'
import { GameReducer } from './GameReducer'

const initialState: GameState = {
  cards: [
    '🍺',
    '🍻',
    '🥂',
    '🍷',
    '🥃',
    '🍸',
    '🍹',
    '🧉',
    '🍺',
    '🍻',
    '🥂',
    '🍷',
    '🥃',
    '🍸',
    '🍹',
    '🧉',
  ].map((symbol) => ({
    symbol: symbol,
    isGuessed: false,
  })),
  flippedCards: [undefined, undefined],
  startTime: new Date(),
  movesCounter: 0,
}

export const GameContext = createContext<
  GameState & { dispatch: React.Dispatch<GameActions> }
>({
  cards: [],
  flippedCards: [undefined, undefined],
  startTime: new Date(),
  movesCounter: 0,
  dispatch: () => undefined,
})

type Props = {
  children?: ReactElement
}
export const GameContextProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(GameReducer, initialState)

  const gameContext: GameState & { dispatch: React.Dispatch<GameActions> } = {
    ...state,
    dispatch,
  }

  return <GameContext.Provider value={gameContext}>{children}</GameContext.Provider>
}
