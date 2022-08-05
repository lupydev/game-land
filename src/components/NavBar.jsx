import React from 'react'
import {Link} from 'react-router-dom';

export const NavBar = () => {

  return (
    <div className='navBar'>
        NavBar
        <Link to="/wordle">wordle</Link>
    </div>
  )
}
