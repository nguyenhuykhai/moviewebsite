// import { logDOM } from '@testing-library/react'
import React, { useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Nativation() {
  const [scroll, setScroll] = useState(false)
  useLayoutEffect(() => {
    const scrollElement = () => {
      setScroll(window.scrollY > 0)
    }
    window.addEventListener('scroll', scrollElement)
  }, [scroll])

  return (
    <div className={(`header ${scroll ? 'shadow' : ''}`)} id='header'>
      <a href='#home' className='logo'>
        <i className='bx bxs-movie' ></i>
        <p>MOVIES THEATER</p>
      </a>
      <div className='bx bx-menu' id='menu-icon'>
        <i className='bx bx-menu' ></i>
      </div>

      <ul className='navbar'>
        <li><a href='#home'>Movies</a></li>
        <li><a href='#home'>Comming</a></li>
        <li><Link to='/'>Home</Link></li>
        <li><a href='#home'>Newsletter</a></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
      <a href='#' className='btn'>Sign In</a>
    </div>
  )
}
