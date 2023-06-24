import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage.css'

export const HomePage: FC = () => {
  const startSound = new Audio('/dragon-ball-flying-nimbus.mp3')

  const [go, setGo] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (go) {
      startSound.play()
      const timer = setTimeout(() => navigate('/game'), 1500)
      return () => clearTimeout(timer)
    }
  }, [go])

  return (
    <main className="MainPageWrapper">
      <div className={['Centered', go ? 'go' : ''].join(' ')}>
        <button
          className={['RocketIcon', go ? 'go' : ''].join(' ')}
          onClick={() => setGo(true)}
        >
          <div className="background">
            <div className="rocket">🚀</div>
          </div>
        </button>
      </div>

      <div className={['FadeIn', go ? 'go' : ''].join(' ')}></div>
    </main>
  )
}
