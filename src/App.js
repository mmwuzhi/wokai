import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

import Navbar from './components/Navbar'
import Example from './components/Example'
import Comment from './components/Comment'
import SignUp from './components/user/SignUp'
import MyPage from './components/user/MyPage'
import Login from './components/user/Login'
import Logout from './components/user/Logout'

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br />
        <Route path='/' exact component={Example} />
        <Route path='/comment' component={Comment} />
        <Route path='/user/signup' component={SignUp} />
        <Route path='/user/mypage' component={MyPage} />
        <Route path='/user/login' component={Login} />
        <Route path='/user/logout' component={Logout} />
      </div>
    </Router>
  )
}

export default App
