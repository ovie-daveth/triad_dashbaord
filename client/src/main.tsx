import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider.tsx'
import { IKContext } from 'imagekitio-react'


const urlEndpoint = import.meta.env.VITE_IMGKIT_URL;
const publicKey = import.meta.env.VITE_PUBLIC_IMGKITIO_KEY;


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
  <BrowserRouter>
   <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
   <IKContext
        urlEndpoint={urlEndpoint}
        publicKey={publicKey}
        authenticator={authenticator}
      >

    <App />

  </IKContext>
    </ThemeProvider>
  </BrowserRouter>
  </StrictMode>,
)
