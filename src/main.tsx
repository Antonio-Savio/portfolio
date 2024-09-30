import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './contexts/theme.tsx'
import { LanguageProvider } from './contexts/language.tsx'

createRoot(document.getElementById('root')!).render(
  <LanguageProvider>
    <ThemeProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </LanguageProvider>
)
