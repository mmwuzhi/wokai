import React from 'react'
import { NavLink } from 'react-router-dom'
import { classnames } from 'tailwindcss-classnames'

import { sideLinks } from '../tools/links'

interface DrawSidebarProps {
  /** 侧边栏的表示与否 */
  sidebar: boolean
  handleSidebar?: () => void
  toggleClass: string
  toggleText?: string
}
interface SidebarProps {
  handleSidebar?: () => void
  class: string
  toggleText?: string
}

const DrawSidebar = (props: DrawSidebarProps) => {
  const overlay = classnames('inset-0', 'fixed', 'z-20', {
    hidden: !props.sidebar,
  })

  return (
    <>
      <div onClick={props.handleSidebar} className={overlay} />
      <div className={`${props.toggleClass} opacity-1 transition-opacity`}>
        <div
          className={`z-50 ${
            props.sidebar ? 'nav-menu active' : 'nav-menu'
          } top-14`}
        >
          <Sidebar
            class='fixed w-48 h-screen border-r'
            handleSidebar={props.handleSidebar}
            toggleText={props.toggleText}
          />
        </div>
      </div>
    </>
  )
}

export const Sidebar = (props: SidebarProps) => {
  return (
    <aside className={`${props.class} p-3 flex bg-white flex-col`}>
      <nav>
        <ul className=''>
          {sideLinks.map((linkData, index) => (
            <li key={index}>
              <NavLink
                to={linkData.to}
                onClick={props.handleSidebar}
                className={(navData) =>
                  'nav-text' + (navData.isActive ? ' active-nav' : '')
                }
              >
                {linkData.icon}
                <span className={props.toggleText}>{linkData.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default DrawSidebar
