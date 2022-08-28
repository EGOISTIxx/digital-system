import React from 'react'

import { useSelector } from 'react-redux'
import {
  useLocation,
  Navigate,
  Outlet,
} from 'react-router-dom'

import { selectIsAuthenticated } from '../store/reducers/user/user.slice'

const RequireAuth = () => {
  const isUserAuthenticated = useSelector(
    selectIsAuthenticated
  )
  const location = useLocation()

  return isUserAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to="/auth/login"
      state={{ from: location }}
      replace
    />
  )
}

export default RequireAuth
