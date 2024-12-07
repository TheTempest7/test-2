import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './01-app/App.jsx'
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
          <BrowserRouter>
              <App />
          </BrowserRouter>
  </StrictMode>,
)
