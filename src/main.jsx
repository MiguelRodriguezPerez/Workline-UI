import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { WorklineApp } from './WorklineApp'
import { AuthProvider } from './global/context/AuthProvider'
import { Provider } from 'react-redux'
import { persistor, worklineStore } from './global/redux/store/worklineStore'

import './index.css'
import { PersistGate } from 'redux-persist/integration/react'

// <AuthProvider></AuthProvider>

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={worklineStore}>
        <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
                <WorklineApp />
        </BrowserRouter>
        </PersistGate>
        </Provider>
    </StrictMode>
)
