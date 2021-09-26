import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/Navbar'
import DrawSidebar from './components/Sidebar'
import Main from './components/Main'

import "nprogress/nprogress.css"

function App(): JSX.Element {
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

  const onKeyDown = (e: { key: string }) => {
    if (e.key === 'Escape') setSidebar(false)
  }

  return (
    <div className=''>
      <Router>
        <Navbar handleSidebar={showSidebar} />
        <DrawSidebar
          toggleClass='block lg:hidden'
          handleSidebar={showSidebar}
          sidebar={sidebar}
        />
        <Main />
      </Router>
    </div>
  )
}

export default App
