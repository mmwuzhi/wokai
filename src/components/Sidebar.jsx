import React from 'react'
import { NavLink } from 'react-router-dom'

import { sideLinks } from '../tools/links'

const Sidebar = () => {
  return (
    <aside className='bg-gray-50 fixed flex flex-col p-3 h-full w-48'>
      <nav>
        <ul className=''>
          {sideLinks.map((linkData, index) => (
            <li key={index}>
              <NavLink
                to={linkData.to}
                exact
                activeClassName='active-nav'
                className='nav-text'
              >
                {linkData.icon}
                <span>{linkData.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
