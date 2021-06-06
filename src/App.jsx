import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './style.css'

import { Layout } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

import LeftSider from './components/LeftSider'
import Header from './components/Header'
import Routes from './components/Routes'

function App() {
  const [collapsed, setCollapsed] = useState(true)
  const toggle = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout
      style={{
        overflowY: 'scroll',
        height: '100vh',
      }}
    >
      <Router>
        <Header>
          <div>
            <MenuOutlined
              style={{ fontSize: '20px', padding: '10px' }}
              onClick={toggle}
            />
          </div>
        </Header>
        <Layout className='site-layout'>
          <LeftSider collapsed={collapsed} />
          <Layout.Content>
            <Routes />
          </Layout.Content>
        </Layout>
      </Router>
    </Layout>
  )
}

export default App
