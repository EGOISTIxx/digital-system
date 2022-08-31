import React, { useCallback } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

import { ReactComponent as UserLogo } from '../../../../assets/icons/userLogo.svg'
import { useMedia } from '../../../../hooks/useMedia'
import {
  logout,
  selectCurrentUser,
} from '../../../../store/reducers/user/user.slice'
import {
  LogoutWrapper,
  StyledLogoutLogo,
  UserData,
} from './SUser'

export const User = (props: {
  handleClickHidePopover?: () => void
}) => {
  const { handleClickHidePopover } = props

  const userData = useSelector(selectCurrentUser)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const location = useLocation()

  const { isMobile } = useMedia()

  const handleLogout = useCallback(() => {
    dispatch(logout())
    handleClickHidePopover()

    // TODO: create routes file and update this method
    if (location.pathname === '/profile') {
      navigate('/auth/login')
    }

    localStorage.removeItem('userData')
    localStorage.removeItem('isUserAuthenticated')
  }, [location])

  if (userData === null) return

  return (
    <LogoutWrapper isMobile={isMobile}>
      <UserLogo />
      <UserData>{userData.login}</UserData>
      <StyledLogoutLogo onClick={handleLogout} />
    </LogoutWrapper>
  )
}
