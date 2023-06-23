import { FC } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { HomePage } from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Game } from './pages/Game'
import { GameContextProvider } from './contexts/GameContext/GameContext'

export const App: FC = () => (
  <ThemeProvider theme={{}}>
    <CssBaseline />
    <BrowserRouter>
      <GameContextProvider>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/game" Component={Game} />
        </Routes>
      </GameContextProvider>
    </BrowserRouter>
  </ThemeProvider>
)
