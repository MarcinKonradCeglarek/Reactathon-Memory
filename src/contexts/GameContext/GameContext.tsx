import { FC, ReactElement, createContext, useReducer } from 'react'
import { GameActions, GamePhase, GameState } from './GameTypes'
import { GameReducer } from './GameReducer'

const initialState: GameState = {
  cards: new Array(16).fill(0).map((_, idx) => ({
    id: idx,
    symbol: idx.toString(),
    isFlipped: false,
    isGuessed: false,
  })),
  gamePhase: GamePhase.BeforeFirstMove,
  startTime: new Date(),
  movesCounter: 0,
}

export const GameContext = createContext<
  GameState & { dispatch: React.Dispatch<GameActions> }
>({
  cards: [],
  gamePhase: GamePhase.BeforeFirstMove,
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
