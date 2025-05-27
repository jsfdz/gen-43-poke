import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import NameProvider from './providers/NameProvider'
import App from './routes/App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <NameProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NameProvider>
)
