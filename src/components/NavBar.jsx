import React from 'react'
import {Link} from 'react-router-dom';

export const NavBar = () => {

  return (
    <div className='navBar'>
        
        <Link to="/">Home</Link>
        <Link to="/ranking">Ranking</Link>
    </div>
  )
}
