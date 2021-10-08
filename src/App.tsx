import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import 'nprogress/nprogress.css'

import './plugins/setNprogress'
import Navbar from './components/Navbar'
import DrawSidebar from './components/Sidebar'
import Main from './components/Main'
import { useDispatch } from 'react-redux'
import { checkLogged } from './actions/userActions'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const queryClient = new QueryClient()
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => {
    setSidebar(!sidebar)
  }

  useEffect(() => {
    checkLogged(dispatch)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [dispatch])

  const onKeyDown = (e: { key: string }) => {
    if (e.key === 'Escape') setSidebar(false)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar handleSidebar={showSidebar} />
        <DrawSidebar
          toggleClass='block lg:hidden'
          handleSidebar={showSidebar}
          sidebar={sidebar}
        />
        <Main />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
