

import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages'
import CreatePosts from './pages/CreatePosts'

function App() {

  return (
  <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/create' element={<CreatePosts />} />
  </Routes>

  )
}

export default App
