import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'antd/dist/antd.css'

import {UserProvider} from './components/provider/UserContext'

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root')
)
