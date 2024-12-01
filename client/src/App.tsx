import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const LandingPage = lazy(() => import('./pages'));
const CreatePosts = lazy(() => import('./pages/CreatePosts'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const SignIn = lazy(() => import('./pages/auth/sign-in'));
const SignIn2 = lazy(() => import('./pages/auth/sign-in-2'));
const SignUp = lazy(() => import('./pages/auth/sign-up'));
const ForgotPassword = lazy(() => import('./pages/auth/forgot-password'));
const Otp = lazy(() => import('./pages/auth/otp'));
const Interface = lazy(() => import('./pages/interface'));
const SubmissionPage = lazy(() => import('./pages/submissionPage'));

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/auth/login' element={<SignIn />} />
        <Route path='/interface' element={<Interface />} />
        <Route path='/dashboard/submissions' element={<SubmissionPage />} />
        <Route path='/auth/login2' element={<SignIn2 />} />
        <Route path='/auth/signup' element={<SignUp />} />
        <Route path='/auth/forgot-password' element={<ForgotPassword />} />
        <Route path='/auth/otp' element={<Otp />} />
        <Route path='/posts/create' element={<CreatePosts />} />
      </Routes>
    </Suspense>
  );
}

export default App
