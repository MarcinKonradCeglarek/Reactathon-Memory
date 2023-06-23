import { GameContext } from '@/contexts/GameContext/GameContext'
import { FC, useContext } from 'react'
import './Game.css'
import { GameFeeback } from '@/contexts/GameContext/GameTypes'

export const Game: FC = () => {
  const gameContext = useContext(GameContext)
  return (
    <div className="wrapper">
      <div className="gridContainer">
        {gameContext.cards.map((c, idx) => {
          const cardClasses =
            gameContext.flippedCards.includes(idx) || c.isGuessed
              ? 'flip-card flipped'
              : 'flip-card'
          return (
            <div
              className={cardClasses}
              key={idx}
              onClick={() => {
                gameContext.dispatch({ type: 'FlipCard', cardIdx: idx })
                setTimeout(() => gameContext.dispatch({ type: 'FlipCardReaction' }), 2000)
              }}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">🍍</div>
                <div className="flip-card-back">{c.symbol}</div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="hud">
        {gameContext.movesCounter} {gameContext.feedback}
      </div>

      {gameContext.feedback === GameFeeback.Miss && (
        <div className="feedback miss">😹💩</div>
      )}

      {gameContext.feedback === GameFeeback.Match && (
        <div className="feedback match">🤗🤑</div>
      )}

      {gameContext.feedback === GameFeeback.GameWon && (
        <div className="feedback win">🏆🥇</div>
      )}
    </div>
  )
}
