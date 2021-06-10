import React from 'react'
import { NavLink } from 'react-router-dom'

//import Clock from './Clock'
const Sidebar = () => {
  return (
    <aside className='fixed flex flex-col p-3 h-full w-48'>
      <nav>
        <ul className=''>
          <li>
            <NavLink
              to='/'
              exact
              activeClassName='active-nav'
              className='nav-text'
            >
              ホームページ
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/comment'
              exact
              activeClassName='active-nav'
              className='nav-text'
            >
              コメント
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/chat'
              exact
              activeClassName='active-nav'
              className='nav-text'
            >
              チャット
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
