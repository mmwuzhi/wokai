import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Chat from './Chat'
import Comment from './Comment'
import SignUp from './user/SignUp'
import MyPage from './user/MyPage'
import Login from './user/Login'
import Logout from './user/Logout'

const Routes = () => {
  return (
    <div className='wrapper'>
      <Route path='/' exact component={Home} />
      <Route path='/chat' exact component={Chat} />
      <Route path='/comment' component={Comment} />
      <Route path='/user/signup' component={SignUp} />
      <Route path='/user/mypage' component={MyPage} />
      <Route path='/user/login' component={Login} />
      <Route path='/user/logout' component={Logout} />
    </div>
  )
}

export default Routes
