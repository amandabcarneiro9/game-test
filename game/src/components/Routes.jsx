import { Routes, Route } from 'react-router-dom'
import FirstPage from '../pages/FirstPage'
import FirstGame from '../pages/FirstGame'
import InputTest from '../pages/InputTest'

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/first-game" element={<FirstGame />} />
      <Route path="/input-test" element={<InputTest />} />
      <Route path="/" element={<FirstPage />} />
    </Routes>
  )
}
