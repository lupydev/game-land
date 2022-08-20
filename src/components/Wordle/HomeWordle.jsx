import React from 'react'
import { ContextApp } from '../../Context/Context'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { NavBar } from '../NavBar'
import { Wordle } from './Wordle'

export const HomeWordle = () => {


  return (
    <ContextApp>
      <Header />
      <NavBar />
      <Wordle />
      <Footer />
    </ContextApp>
  )
}
