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
        <p>MOVIE-NHK</p>
      </a>
      <ul className='navbar'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  )
}
