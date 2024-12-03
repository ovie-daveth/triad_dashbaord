import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider.tsx'
import { IKContext } from 'imagekitio-react'
import { AuthProvider } from "./context/AuthContext"
import { Toaster } from './components/ui/toaster.tsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const urlEndpoint = import.meta.env.VITE_IMGKIT_URL;
const publicKey = import.meta.env.VITE_PUBLIC_IMGKITIO_KEY;

if (typeof global === 'undefined') {
  window.global = window;
}

const authenticator =  async () => {
  try {
      const response = await fetch('http://localhost:5000/auth');

      if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Request failed with status ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log("data", data)
      const { signature, expire, token } = data;
      return { signature, expire, token };
  } catch (error: any) {
      throw new Error(`Authentication request failed: ${error.message}`);
  }
};


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <AuthProvider>
   <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  <BrowserRouter>
   <IKContext
        urlEndpoint={urlEndpoint}
        publicKey={publicKey}
        authenticator={authenticator}
      >
    <App />
    <Toaster />
    <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark" 
    />
  </IKContext>
  </BrowserRouter>
  </ThemeProvider>
   </AuthProvider>
  </StrictMode>,
)
