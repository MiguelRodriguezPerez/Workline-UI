import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { WorklineApp } from './WorklineApp'
import { AuthProvider } from './global/context/AuthProvider'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <WorklineApp/>
            </BrowserRouter>
        </AuthProvider>
    </StrictMode>
)
