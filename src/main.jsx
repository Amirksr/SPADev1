import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.rtl.min.css"
import { ThemeProvider } from 'react-bootstrap'

createRoot(document.getElementById('root')).render(
 
    <ThemeProvider dir="rtl">
      <App />
    </ThemeProvider>
  
)
