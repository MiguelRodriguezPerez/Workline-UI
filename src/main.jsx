import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { WorklineApp } from './WorklineApp'
import { AuthProvider } from './global/context/AuthProvider'
import { Provider } from 'react-redux'
import { worklineStore } from './global/redux/store/worklineStore'

import './index.css'

// <AuthProvider></AuthProvider>

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={worklineStore}>
            <BrowserRouter>
                <WorklineApp />
            </BrowserRouter>
        </Provider>
    </StrictMode>
)
