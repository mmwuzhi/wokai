import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import { Layout, Menu } from 'antd'
import {
  HomeOutlined,
  MessageOutlined,
  CommentOutlined,
} from '@ant-design/icons'

const LeftSider = withRouter(({ history, ...props }) => {
  return (
    <Layout.Sider
      trigger={null}
      breakpoint='xs'
      collapsible
      collapsedWidth='0'
      width='200'
      collapsed={props.collapsed}
      style={{
        backgroundColor: 'white',
        overflow: 'auto',
        position: 'fixed',
        left: '0',
        height: '100vh',
        zIndex: '1',
      }}
    >
      <Menu
        theme='light'
        mode='inline'
        defaultSelectedKeys={['/']}
        selectedKeys={[history.location.pathname]}
      >
        <Menu.Item key='/' icon={<HomeOutlined />}>
          <NavLink to='/' exact activeClassName='active' className='nav-link'>
            ホーム
          </NavLink>
        </Menu.Item>
        <Menu.Item key='/comment' icon={<MessageOutlined />}>
          <NavLink
            to='/comment'
            exact
            activeClassName='active'
            className='nav-link'
          >
            コメント
          </NavLink>
        </Menu.Item>
        <Menu.Item key='/chat' icon={<CommentOutlined />}>
          <NavLink
            to='/chat'
            exact
            activeClassName='active'
            className='nav-link'
          >
            チャット
          </NavLink>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
})
export default LeftSider
