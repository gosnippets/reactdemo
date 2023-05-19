import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                {/* <li><a href="/">Home</a></li>                
                <li><a href="/home/about">About</a></li> */}
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}
