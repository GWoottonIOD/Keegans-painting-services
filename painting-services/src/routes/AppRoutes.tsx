import { Route, Routes } from 'react-router-dom'
import { Container } from '@mui/material'
import Video from '../components/Video'


export default function AppRoutes() {
  return (

    <Routes>
      <Route path='/' element={<Container><Video /></Container>} />
    </Routes>
  )
}