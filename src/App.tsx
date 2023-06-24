import { FC } from 'react'
import { HomePage } from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Game } from './pages/Game'
import { GameContextProvider } from './contexts/GameContext/GameContext'

export const App: FC = () => (
  <BrowserRouter>
    <GameContextProvider>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/game" Component={Game} />
      </Routes>
    </GameContextProvider>
  </BrowserRouter>
)
