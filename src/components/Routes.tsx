import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Chat from './Chat'
import Comment from './Comment'
import Tool from './Tool'
import SignUp from './user/SignUp'
import MyPage from './user/MyPage'
import Login from './user/Login'
import Logout from './user/Logout'

const MyRoute: React.FC = () => {
  return (
    <div className={`max-w-2xl w-full p-6`}>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/comment' element={<Comment />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/tool' element={<Tool />} />
        <Route path='/user/signup' element={<SignUp />} />
        <Route path='/user/mypage' element={<MyPage />} />
        <Route path='/user/login' element={<Login />} />
        <Route path='/user/logout' element={<Logout />} />
      </Routes>
    </div>
  )
}

export default MyRoute
