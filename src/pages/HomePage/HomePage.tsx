import { FC } from 'react'
import { Typography } from '@mui/material'
import { CenteredContent } from '@/components/CenteredContent/CenteredContent'
import { Colors } from '@/constants/styles'
import { MainPageWrapper, RocketIcon } from './HomePage.styles'

export const HomePage: FC = () => (
  <MainPageWrapper>
    <CenteredContent>
      <Typography variant="h4" fontWeight={800} color={[Colors.RichBlack]}>
        Vite React App
      </Typography>
      <Typography variant="subtitle1" fontWeight={600} color={Colors.Rufous}>
        It&apos;s sooooo fast...
      </Typography>

      <RocketIcon onClick={() => window.alert('To Infinity and Beyond!!')} />
    </CenteredContent>
  </MainPageWrapper>
)
