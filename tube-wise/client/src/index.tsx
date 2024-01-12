
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
// import the styles


const root = createRoot(document.getElementById('root')!) // tell TS that you're sure the root won't be null using !
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

