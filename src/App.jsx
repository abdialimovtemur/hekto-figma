import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout/main-layout/main-layout'
import { Home } from './pages/home'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />}>
        <Route index element={<Home/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
