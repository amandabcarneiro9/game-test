import PageRoutes from './components/Routes'

import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <PageRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
