import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import '@fontsource/vt323'
import Page from './App.tsx'
import { theme } from '../theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Page />
    </ThemeProvider>
  </StrictMode>,
)
