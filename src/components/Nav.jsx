import React from 'react'
import { NavLink } from 'react-router-dom'
import './../styles/nav.scss';

export default function Nav() {
  //Let's have two routes - One is a demo Home page and another is the real article content
  return (
      <nav className='nav-links'>
          <ul className='nav-list'>
              <NavLink activeclassname="active"  exact="true" to="/">
                <li className='nav-item'>
                    Home
                </li>
              </NavLink>

             <NavLink exact="true" to="/article">
                <li className='nav-item'>
                    Article
                </li>
              </NavLink>
          </ul>
      </nav>
  )
}
