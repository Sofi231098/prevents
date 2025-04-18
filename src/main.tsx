import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './core/providers/ThemeContext.tsx'
import { QueryContext } from './core/providers/QueryContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryContext>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </QueryContext>
  </StrictMode>,
)
