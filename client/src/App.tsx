

import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages'
import CreatePosts from './pages/CreatePosts'

function App() {


// const urlEndpoint = import.meta.env.VITE_IMGKIT_URL;

// // optional parameters (needed for client-side upload)
// const publicKey = import.meta.env.VITE_PUBLIC_IMGKITIO_KEY; 
// const authenticator = ()=>{
//   return new Promise((resolve,reject)=>{
//     resolve({signature,token,expiry})
//   })
// };
  return (
  <Routes>
    <Route path='/' element={<LandingPage />} />
    <Route path='/posts/create' element={<CreatePosts />} />
  </Routes>

  )
}

export default App
