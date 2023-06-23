import { GameContext } from '@/contexts/GameContext/GameContext'
import { FC, useContext } from 'react'
import './Game.css'

export const Game: FC = () => {
  const gameContext = useContext(GameContext)

  return (
    <div className="container">
      {gameContext.cards.map((c) => (
        <div className="flip-card" key={c.id}>
          <div className="flip-card-inner">
            <div className="flip-card-front">Placeholder</div>
            <div className="flip-card-back">{c.symbol}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
