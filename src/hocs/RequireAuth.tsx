import React from 'react'

import { useSelector } from 'react-redux'
import {
  Navigate,
  Outlet,
} from 'react-router-dom'

import { selectIsAuthenticated } from '../store/reducers/user/user.slice'

const RequireAuth = () => {
  const isUserAuthenticated = useSelector(
    selectIsAuthenticated
  )

  return isUserAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" replace />
  )
}

export default RequireAuth
