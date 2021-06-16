import React from 'react'
import Routes from './Routes'
import { Sidebar } from './Sidebar'

const Main = () => {
  return (
    <div
      className={`relative top-10 flex container justify-center mx-auto my-3`}
    >
      <Sidebar class='hidden md:block w-16 lg:w-64' toggleText='hidden lg:block' />
      <Routes />
    </div>
  )
}
export default Main
