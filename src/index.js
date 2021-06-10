import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import App from './App'
import { UserProvider } from './provider/UserContext'

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root')
)
