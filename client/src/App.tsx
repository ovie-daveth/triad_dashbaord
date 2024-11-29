

import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages'
import CreatePosts from './pages/CreatePosts'
import Dashboard from './pages/dashboard'

function App() {



  return (
  <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/posts/create' element={<CreatePosts />} />
  </Routes>

  )
}

export default App
