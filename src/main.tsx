import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TCADashboard from './TCADashboard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TCADashboard />
  </StrictMode>,
)
