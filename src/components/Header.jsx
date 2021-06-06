import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { Layout, Dropdown, Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import { UserContext } from '../provider/UserContext'

const Header = (props) => {
  const { state } = useContext(UserContext)

  const user = (
    <Menu>
      {state.logged ? (
        <>
          <Menu.Item>
            <NavLink
              to='/user/mypage'
              activeClassName='active'
              className='nav-link'
            >
              マイページ
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink
              to='/user/logout'
              activeClassName='active'
              className='nav-link'
            >
              ログアウト
            </NavLink>
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item>
            <NavLink
              to='/user/signup'
              activeClassName='active'
              className='nav-link'
            >
              サインアップ
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink
              to='/user/login'
              activeClassName='active'
              className='nav-link'
            >
              ログイン
            </NavLink>
          </Menu.Item>
        </>
      )}
    </Menu>
  )
  return (
    <Layout.Header
      class='header'
      style={{
        backgroundColor: '#17a2b8',
        position: 'sticky',
        top: '0',
        zIndex: '1',
      }}
    >
      {props.children}
      <Link
        style={{ fontSize: '20px', color: 'white'}}
        to='/'
        className='navbar-brand'
      >
        なになにさいと
      </Link>
      <div>
        <Dropdown overlay={user} placement='bottomRight' arrow>
          <UserOutlined style={{ fontSize: '20px', padding: '10px' }} />
        </Dropdown>
      </div>
    </Layout.Header>
  )
}

export default Header
