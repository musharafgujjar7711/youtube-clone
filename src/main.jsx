import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppContextProvider } from './components/ContextApi.jsx'
import { UtilsContextProvider } from './components/UtilsContext.jsx'



createRoot(document.getElementById('root')).render(
  <AppContextProvider>
<UtilsContextProvider>
    <App />
    </UtilsContextProvider>
    </AppContextProvider>
)
