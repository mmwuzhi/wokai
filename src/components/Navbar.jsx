import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'

//import Clock from './Clock'
import { LoginConsumer } from '../components/provider/LoginProvider'

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-info navbar-expand-lg shadow'>
        <Link to='/' className='navbar-brand'>
          なんでもさいと{' '}
          {/* <span role='img' aria-label='fire'>
            🔥
          </span> */}
        </Link>
        <div className='collpase navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='navbar-item'>
              <NavLink
                to='/'
                exact
                activeClassName='active'
                className='nav-link'
              >
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
            {this.props.isLogin ? (
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
            {this.props.isLogin ? (
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
}

function NewNavbar() {
  return (
    <LoginConsumer>
      {(data) => <Navbar isLogin={data.isLogin} />}
    </LoginConsumer>
  )
}

export { NewNavbar }
