

import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages'
import CreatePosts from './pages/CreatePosts'
import Dashboard from './pages/dashboard'
import SignIn from './pages/auth/sign-in'
import SignIn2 from './pages/auth/sign-in-2'
import SignUp from './pages/auth/sign-up'
import ForgotPassword from './pages/auth/forgot-password'
import Otp from './pages/auth/otp'
import Interface from './pages/interface'

function App() {



  return (
  <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/auth/login' element={<SignIn />} />
    <Route path='/interface' element={<Interface />} />
    <Route path='/auth/login2' element={<SignIn2 />} />
    <Route path='/auth/signup' element={<SignUp />} />
    <Route path='/auth/forgot-password' element={<ForgotPassword />} />
    <Route path='/auth/otp' element={<Otp />} />
    <Route path='/posts/create' element={<CreatePosts />} />
  </Routes>

  )
}

export default App
