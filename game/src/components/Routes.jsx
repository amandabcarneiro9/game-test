import { Routes, Route } from 'react-router-dom'
import FirstPage from '../pages/FirstPage'
import FirstGame from '../pages/FirstGame'

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/first-game" element={<FirstGame />} />
      <Route path="/" element={<FirstPage />} />
    </Routes>
  )
}
