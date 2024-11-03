import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { WorklineApp } from './WorklineApp'
import './index.css'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <WorklineApp/>
            </BrowserRouter>
        </Provider>
    </StrictMode>
)
