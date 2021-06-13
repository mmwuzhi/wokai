import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/Navbar'
import Routes from './components/Routes'
import Sidebar from './components/Sidebar'

function App() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => {setSidebar(!sidebar)}
  return (
    <div className=''>
      <Router>
        <Navbar handleSidebar={showSidebar} />
        <div className='relative top-6 container mx-auto my-3 max-w-3xl p-5 wh-90 justify-center'>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <Sidebar />
          </nav>
          <Routes />
        </div>
      </Router>
    </div>
  )
}

export default App
