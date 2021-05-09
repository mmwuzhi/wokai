import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'

import Navbar from './Navbar'
import Example from './Example'
import Comment from './Comment'
import SignIn from './user/SignIn'
import MyPage from './user/MyPage'
import Login from './user/Login'
import Logout from './user/Logout'

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br />
        <Route path='/' exact component={Example} />
        <Route path='/comment' component={Comment} />
        <Route path='/user/signup' component={SignIn} />
        <Route path='/user/mypage' component={MyPage} />
        <Route path='/user/login' component={Login} />
        <Route path='/user/logout' component={Logout} />
      </div>
    </Router>
  )
}

export default App
