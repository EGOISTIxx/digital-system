import React from 'react'

import { HeaderWrapper } from './SHeader'
import { Logo } from './components/Logo/Logo'
import { NavBar } from './components/NavBar/NavBar'
import { User } from './components/User/User'

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <NavBar />
      <User />
    </HeaderWrapper>
  )
}
