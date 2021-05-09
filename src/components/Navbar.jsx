import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
//import Clock from './Clock'

import axios from 'axios'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      myPageLink: '',
      myPageText: '',
      loginLink: '',
      loginText: '',
    }
    axios.get('/api/users/userInfo').then((res) => {
      console.log(res.data)
      res.data.code === 1
        ? this.setState({
            myPageLink: '/user/signup',
            myPageText: 'サインアップ',
            loginLink: '/user/login',
            loginText: 'ログイン',
          })
        : this.setState({
            myPageLink: '/user/mypage',
            myPageText: 'マイページ',
            loginLink: '/user/logout',
            loginText: 'ログアウト',
          })
    })
  }

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
            <li className='navbar-item'>
              <NavLink
                to={this.state.myPageLink}
                activeClassName='active'
                className='nav-link'
              >
                {this.state.myPageText}
              </NavLink>
            </li>
            <li className='navbar-item'>
              <NavLink
                to={this.state.loginLink}
                activeClassName='active'
                className='nav-link'
              >
                {this.state.loginText}
              </NavLink>
            </li>
          </ul>
          {/* <Clock /> */}
        </div>
      </nav>
    )
  }
}
