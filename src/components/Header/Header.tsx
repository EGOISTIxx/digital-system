import React, { memo, useMemo } from 'react'

import { useMedia } from '../../hooks/useMedia'
import { HeaderWrapper } from './SHeader'
import { Logo } from './components/Logo/Logo'
import { NavBar } from './components/NavBar/NavBar'
import { PopoverMenu } from './components/PopoverMenu/PopoverMenu'
import { User } from './components/User/User'

export const Header = memo(() => {
  const { isMobile } = useMedia()

  const renderMobileVersion = useMemo(() => {
    return <PopoverMenu />
  }, [isMobile])

  const renderDescktopVersion = useMemo(() => {
    return (
      <>
        <NavBar />
        <User />
      </>
    )
  }, [isMobile])

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
