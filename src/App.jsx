import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { classnames } from 'tailwindcss-classnames'

import Navbar from './components/Navbar'
import Routes from './components/Routes'
import Sidebar from './components/Sidebar'

function App() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => {
    setSidebar(!sidebar)
  }

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const onKeyDown = (e) => {
    if (e.key === 'Escape') setSidebar(false)
  }

  const overlay = classnames('top-0', 'fixed', 'w-full', 'h-full', {
    hidden: !sidebar,
    'z-40': sidebar,
  })
  return (
    <div className=''>
      <Router>
        <Navbar handleSidebar={showSidebar} />
        <div onClick={showSidebar} className={overlay} />
        <div className='relative opacity-1 transition-opacity top-10 container mx-auto my-3 max-w-3xl p-5 wh-90 justify-center'>
          <nav
            className={`z-50 ${
              sidebar ? 'nav-menu active' : 'nav-menu'
            } top-14`}
          >
            <Sidebar />
          </nav>
          <Routes />
        </div>
      </Router>
    </div>
  )
}

export default App
