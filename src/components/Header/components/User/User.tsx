import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

import { ReactComponent as UserLogo } from '../../../../assets/icons/userLogo.svg'
import {
  logout,
  selectCurrentUser,
} from '../../../../store/reducers/user/user.slice'
import {
  LogoutWrapper,
  StyledLogoutLogo,
  UserData,
} from './SUser'

export const User = () => {
  const userData = useSelector(selectCurrentUser)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const location = useLocation()

  const handleLogout = () => {
    dispatch(logout())

    // TODO: create routes file and update this method
    if (location.pathname === '/profile') {
      navigate('/auth/login')
    }

    localStorage.removeItem('userData')
    localStorage.removeItem('isUserAuthenticated')
  }

  if (userData === null) return

  return (
    <LogoutWrapper>
      <UserLogo />
      <UserData>{userData.login}</UserData>
      <StyledLogoutLogo onClick={handleLogout} />
    </LogoutWrapper>
  )
}
