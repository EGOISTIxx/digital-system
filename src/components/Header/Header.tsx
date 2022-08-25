import React from 'react'

import { HeaderWrapper } from './SHeader'
import { Logo } from './components/Logo/Logo'
import { NavBar } from './components/NavBar/NavBar'

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <NavBar />
    </HeaderWrapper>
  )
}
