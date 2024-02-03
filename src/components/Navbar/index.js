import React from 'react'
import './index.css';
export default function Navbar({setshowModal}) {
  return (
    <nav className='nav-components'>
      
      <div className='container modal'>
      <h1>Logo</h1>
        <ul>
          <li>Home</li>
          <li>Posts</li>
          <li onClick={()=>setshowModal(true)}>Sign In</li>
          {/* that used function reference */}
        </ul>
      </div>
    </nav>
  )
}
