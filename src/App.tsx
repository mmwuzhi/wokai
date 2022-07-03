import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import 'nprogress/nprogress.css'

import './plugins/setNprogress'
import Navbar from './components/Navbar'
import DrawSidebar from './components/Sidebar'
import Main from './components/Main'
import { checkLogged } from './hooks/useLogged'

const App: React.FC = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        retryDelay: 3 * 1000,
        staleTime: 1 * 1000,
        cacheTime: 10 * 60 * 1000,
      },
    },
  })
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => {
    setSidebar(!sidebar)
  }

  useEffect(() => {
    // 预读取登陆信息
    queryClient.prefetchQuery('logged', checkLogged)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setSidebar(false)
  }

  return (
    <React.StrictMode>
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
    </React.StrictMode>
  )
}

export default App
