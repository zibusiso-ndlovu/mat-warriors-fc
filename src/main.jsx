import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

console.log('Main.jsx is running')
const root = document.getElementById('root')
console.log('Root element:', root)

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)