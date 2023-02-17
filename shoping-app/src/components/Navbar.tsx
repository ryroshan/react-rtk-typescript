import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <span>Redux $tore</span>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart</Link>
      </div>
    </div>
  )
}

export default Navbar