import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { classnames } from 'tailwindcss-classnames'

import { iconMenu, iconUser } from '../tools/Icons'
import { UserContext } from '../provider/UserContext'

const Navbar = (props) => {
  const { state } = useContext(UserContext)
  const [userDropdown, setUserDropdown] = useState(false)

  const showUserDropdown = () => {
    setUserDropdown(!userDropdown)
  }

  const userDropClass = classnames(
    'transition-all',
    'duration-300',
    'transform',
    'origin-top-right',
    'absolute',
    'right-0',
    'top-14',
    'z-50',
    'w-56',
    'mt-2',
    'origin-top-right',
    'bg-white',
    'border',
    'border-gray-200',
    'divide-y',
    'divide-gray-100',
    'rounded-md',
    'shadow-lg',
    'outline-none',
    {
      'scale-95': !userDropdown,
      '-translate-y-2': !userDropdown,
      'opacity-0': !userDropdown,
      invisible: !userDropdown,
      'scale-100': userDropdown,
      'translate-y-0': userDropdown,
      'opacity-1': userDropdown,
      visible: userDropdown,
    }
  )

  const overlay = classnames('top-0', 'fixed', 'w-full', 'h-full', {
    hidden: !userDropdown,
    'z-40': userDropdown,
  })
  const signArea = classnames('px-4', 'py-3', { hidden: !state.logged })

  return (
    <header className='z-40 flex fixed w-full visible top-0 h-14 border border-blue-100 bg-white justify-between items-center'>
      <span
        onClick={props.handleSidebar}
        aria-hidden='true'
        className='p-4 text-blue-300 cursor-pointer'
      >
        {iconMenu}
      </span>
      <Link to='/' className='text-xl text-blue-300'>
        なになにさいと
      </Link>
      <div className='relative inline-block text-left'>
        <span
          onClick={showUserDropdown}
          aria-hidden='true'
          className='p-4 text-blue-300 cursor-pointer'
        >
          <button className='transition ease-in-out rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue'>
            {iconUser}
          </button>
        </span>
      </div>
      <div onClick={() => setUserDropdown(false)} className={overlay} />
      <div className={userDropClass}>
        <div className={signArea}>
          <p className='text-sm leading-5'>Signed in as</p>
          <p className='text-sm font-medium leading-5 text-gray-900 truncate'>
            {state.userData.email}
          </p>
        </div>
        <div className='py-1'>
          {state.logged ? (
            <NavLink
              to='/user/mypage'
              activeClassName='active'
              className='text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left'
            >
              マイページ
            </NavLink>
          ) : (
            <NavLink
              to='/user/signup'
              activeClassName='active'
              className='text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left'
            >
              サインアップ
            </NavLink>
          )}
          <span
            tabIndex='-1'
            className='flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50'
            aria-disabled='true'
          >
            Come Soon
          </span>
        </div>
        <div className='py-1'>
          {state.logged ? (
            <NavLink
              to='/user/logout'
              activeClassName='active'
              className='text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left'
            >
              ログアウト
            </NavLink>
          ) : (
            <NavLink
              to='/user/login'
              activeClassName='active'
              className='text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left'
            >
              ログイン
            </NavLink>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
