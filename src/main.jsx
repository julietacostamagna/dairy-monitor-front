import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MainProvider } from './context/MainContext'
import { TabProvider } from './context/TabContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TabProvider>
      <MainProvider>
        <App />
      </MainProvider>
    </TabProvider>
  </React.StrictMode>
)
