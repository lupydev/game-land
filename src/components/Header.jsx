import React from 'react'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <div className='headerContainer'>
        <div className="headerContainer-logo">
            <img src="" alt="" />
        </div>
        <div className="headerContainer-navbar"><NavBar/></div>
        <div className="headerContainer-player">
            <div className="headerContainer-player--name">
                <p>gameland</p>
            </div>
            <div className="headerContainer-player--points">
                <p>100</p>
            </div>
        </div>
    </div>
  )
}
