import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

//import Clock from './Clock'
import { UserContext } from '../provider/UserContext'

const Navbar = () => {
  const { state } = useContext(UserContext)
  return (
    <nav
      className='navbar nav navbar-dark bg-info navbar-expand-lg shadow'
    >
      <Link to='/' className='navbar-brand'>
        なになにさいと
      </Link>
      <div className='collpase navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='navbar-item'>
            <NavLink to='/' exact activeClassName='active' className='nav-link'>
              ホームページ
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink
              to='/comment'
              exact
              activeClassName='active'
              className='nav-link'
            >
              コメント
            </NavLink>
          </li>
          {state.logged ? (
            <li className='navbar-item'>
              <NavLink
                to='/user/mypage'
                activeClassName='active'
                className='nav-link'
              >
                マイページ
              </NavLink>
            </li>
          ) : (
            <li className='navbar-item'>
              <NavLink
                to='/user/signup'
                activeClassName='active'
                className='nav-link'
              >
                サインアップ
              </NavLink>
            </li>
          )}
          {state.logged ? (
            <li className='navbar-item'>
              <NavLink
                to='/user/logout'
                activeClassName='active'
                className='nav-link'
              >
                ログアウト
              </NavLink>
            </li>
          ) : (
            <li className='navbar-item'>
              <NavLink
                to='/user/login'
                activeClassName='active'
                className='nav-link'
              >
                ログイン
              </NavLink>
            </li>
          )}
        </ul>
        {/* <Clock /> */}
      </div>
    </nav>
  )
}

export default Navbar