import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'antd/dist/antd.css'

import {LoginProvider} from './components/provider/LoginProvider'

ReactDOM.render(
  <LoginProvider>
    <App />
  </LoginProvider>,
  document.getElementById('root')
)
