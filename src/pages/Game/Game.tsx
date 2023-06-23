import { GameContext } from '@/contexts/GameContext/GameContext'
import { FC, useContext } from 'react'
import './Game.css'

export const Game: FC = () => {
  const gameContext = useContext(GameContext)
  return (
    <div className="wrapper">
      <div className="gridContainer">
        {gameContext.cards.map((c) => {
          const cardClasses =
            c.isFlipped || c.isGuessed ? 'flip-card flipped' : 'flip-card'
          return (
            <div
              className={cardClasses}
              key={c.id}
              onClick={() => gameContext.dispatch({ type: 'FlipCard', cardId: c.id })}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">Placeholder</div>
                <div className="flip-card-back">{c.symbol}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
