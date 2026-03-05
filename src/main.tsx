import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import LenisProvider from './app/providers/LenisProvider'
import './app/styles/index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LenisProvider>
      <App />
    </LenisProvider>
  </StrictMode>
)
