import React, { memo, useMemo } from 'react'


import { HeaderWrapper } from './SHeader'
import { Logo } from './components/Logo/Logo'
import { NavBar } from './components/NavBar/NavBar'
import { User } from './components/User/User'
import { useMedia } from '../../hooks/useMedia'
import { PopoverMenu } from './components/PopoverMenu/PopoverMenu'

export const Header = memo(() => {
  const { isMobile } = useMedia()

  const renderMobileVersion = useMemo(() => {
    return <PopoverMenu />
  }, [])

  const renderDescktopVersion = useMemo(() => {
    return (
      <>
        <NavBar />
        <User />
      </>
    )
  }, [])

  console.log(isMobile)

  return (
    <HeaderWrapper isMobile={isMobile}>
      <Logo />
      {isMobile
        ? renderMobileVersion
        : renderDescktopVersion}
    </HeaderWrapper>
  )
})

Header.displayName = 'Header'
