

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css' // Aqui es donde se importa el CSS
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/sistemas-medicas">
    <App />
    </BrowserRouter>
  </StrictMode>,
)
