import { FC } from 'react'
import { CenteredContent } from '@/components/CenteredContent/CenteredContent'
import { MainPageWrapper, RocketIcon } from './HomePage.styles'
import { useNavigate } from 'react-router-dom'

export const HomePage: FC = () => {
  const navigate = useNavigate()

  return (
    <MainPageWrapper>
      <CenteredContent>
        <RocketIcon onClick={() => navigate('/game')} />
      </CenteredContent>
    </MainPageWrapper>
  )
}
