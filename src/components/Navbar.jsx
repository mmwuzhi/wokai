import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { classnames } from 'tailwindcss-classnames'

import { iconMenu, iconUser } from '../tools/Icons'
import { UserContext } from '../provider/UserContext'

const Navbar = (props) => {
  const { state } = useContext(UserContext)
  const [userDropdown, setUserDropdown] = useState(false)

  const userIconRef = useRef(null)
  const [userDropLeft, setUserDropLeft] = useState()

  useEffect(() => {
    setUserDropLeft(userIconRef.current.offsetLeft - 180)
    const setLeft = () => {
      const left = userIconRef.current.offsetLeft - 180
      setUserDropLeft(left)
    }
    window.addEventListener('resize', setLeft)

    return () => {
      window.removeEventListener('resize', setLeft)
    }
  }, [])
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

  const overlay = classnames('inset-0', 'fixed', 'z-0', {
    hidden: !userDropdown,
  })
  const signArea = classnames('px-4', 'py-3', { hidden: !state.logged })

  return (
    <header className='z-10 flex justify-center fixed w-full top-0 h-14 border border-blue-100 bg-white items-center'>
      <div className='flex items-center justify-between max-w-5xl w-full'>
        <div className='flex items-center'>
          <span
            onClick={props.handleSidebar}
            aria-hidden='true'
            className='block lg:hidden p-4 text-blue-300 cursor-pointer'
          >
            {iconMenu}
          </span>
          <Link to='/' className='pl-4 text-xl text-blue-300'>
            なになにさいと
          </Link>
        </div>
        <div ref={userIconRef} className='relative inline-block text-left z-10'>
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
        <div style={{ left: userDropLeft }} className={userDropClass}>
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
                onClick={() => setUserDropdown(false)}
                activeClassName='active'
                className='text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left'
              >
                マイページ
              </NavLink>
            ) : (
              <NavLink
                to='/user/signup'
                activeClassName='active'
                onClick={() => setUserDropdown(false)}
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
                onClick={() => setUserDropdown(false)}
                className='text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left'
              >
                ログアウト
              </NavLink>
            ) : (
              <NavLink
                to='/user/login'
                onClick={() => setUserDropdown(false)}
                activeClassName='active'
                className='text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left'
              >
                ログイン
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
