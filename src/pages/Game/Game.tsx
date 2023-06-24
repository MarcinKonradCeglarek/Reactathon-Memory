import { GameContext } from '@/contexts/GameContext/GameContext'
import { FC, useContext, useEffect } from 'react'
import './Game.css'
import { GameFeeback } from '@/contexts/GameContext/GameTypes'
import { useNavigate } from 'react-router-dom'

function GetRandomElement<T>(input: T[]): T {
  const id = Math.floor(Math.random() * input.length)
  return input[id]
}

export const Game: FC = () => {
  const positiveAudio = [new Audio('/nice.mp3'), new Audio('./wow.mp3')]
  const negativeAudio = [new Audio('/windows_error.mp3')]
  const winGameAudio = [new Audio('/anime-wow.mp3')]

  const navigate = useNavigate()
  const gameContext = useContext(GameContext)

  useEffect(() => {
    if (gameContext.feedback === GameFeeback.GameWon) {
      GetRandomElement(winGameAudio).play()
    }

    if (gameContext.feedback === GameFeeback.Match) {
      GetRandomElement(positiveAudio).play()
    }

    if (gameContext.feedback === GameFeeback.Miss) {
      GetRandomElement(negativeAudio).play()
      const flippedCards = gameContext.cards
        .map((c, i) => ({
          card: c,
          idx: i,
        }))
        .filter((ci) => ci.card.isFlipped)
        .map((ci) => ci.idx)
      console.log('UnFlipCards triggered', flippedCards)
      const timer = setTimeout(
        () => gameContext.dispatch({ type: 'UnFlipCards', cards: flippedCards }),
        3000
      )

      return () => clearTimeout(timer)
    }
  }, [gameContext.feedback])

  return (
    <div className="wrapper">
      <div className="gridContainer">
        {gameContext.cards.map((c, idx) => {
          const cardClasses = ['flip-card']

          if (c.isFlipped) {
            cardClasses.push('flipped')
          }

          if (c.isGuessed) {
            cardClasses.push('guessed')
          }

          return (
            <div
              className={cardClasses.join(' ')}
              key={idx}
              onClick={() => {
                gameContext.dispatch({ type: 'FlipCard', cardIdx: idx })
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
      <div className="hud">Moves: {gameContext.movesCounter}</div>

      {gameContext.feedback === GameFeeback.Miss && (
        <div className="feedback miss">😹💩</div>
      )}

      {gameContext.feedback === GameFeeback.Match && (
        <div className="feedback match">🤗🤑</div>
      )}

      {gameContext.feedback === GameFeeback.GameWon && (
        <>
          <div className="feedback win">🏆🥇</div>
          <button
            className="victoryButton"
            onClick={() => {
              gameContext.dispatch({ type: 'StartGame' })
              navigate('/')
            }}
          >
            {"Go home, your're drunk"}
          </button>
        </>
      )}
    </div>
  )
}
