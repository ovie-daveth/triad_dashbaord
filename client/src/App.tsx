import {  lazy, Suspense, useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const LandingPage = lazy(() => import('./pages'));
const CreatePostForm = lazy(() => import('./pages/CreatePosts'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const SignIn = lazy(() => import('./pages/auth/sign-in'));
const SignUp = lazy(() => import('./pages/auth/sign-up'));
const ForgotPassword = lazy(() => import('./pages/auth/forgot-password'));
const Otp = lazy(() => import('./pages/auth/otp'));
const SubmissionPage = lazy(() => import('./pages/submissionPage'));


function App() {

  const { isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    console.log("isLogin", isAuthenticated)
  }, [])
  
  return (
     <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/dashboard' element={isAuthenticated ? <Dashboard /> : <SignIn />} />
        <Route path='/auth/login' element={isAuthenticated ? <Dashboard /> : <SignIn />} />
        <Route path='/dashboard/submissions' element={<SubmissionPage />} />
        <Route path='/auth/signup' element={<SignUp />} />
        <Route path='/auth/forgot-password' element={<ForgotPassword />} />
        <Route path='/auth/otp' element={<Otp />} />
        <Route path='/posts/create' element={<CreatePostForm />} />
      </Routes>
     </Suspense>
  );
}

export default App
