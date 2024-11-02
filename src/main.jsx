import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { WorklineApp } from './WorklineApp'
import './index.css'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
        <WorklineApp/>
    </BrowserRouter>,
)
