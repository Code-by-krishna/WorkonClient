import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from './ContextApi/context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider value={{Name: "Amit", Class: "Mca"}}>
    <App />
   </Provider>
  </StrictMode>,
)
