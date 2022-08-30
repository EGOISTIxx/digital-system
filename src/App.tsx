import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import {
  useLocation,
  useNavigate,
  useRoutes,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { theme } from './global/Theme'
import RequireAuth from './hocs/RequireAuth'
import { Layout } from './layout/Layout'
import { LoginPage } from './pages/Login/Login'
import { MainPage } from './pages/Main/Main'
import { NewsPage } from './pages/News/News'
import { ProfilePage } from './pages/Profile/Profile'
import { selectIsAuthenticated } from './store/reducers/user/user.slice'

const App = () => {
  const isUserAuthenticated = useSelector(
    selectIsAuthenticated
  )

  const navigate = useNavigate()
  
  const location = useLocation()

  useEffect(() => {
    if (
      location.pathname === '/auth/login' &&
      isUserAuthenticated
    ) {
      navigate('/profile', { replace: true })
    }
  }, [location, navigate, isUserAuthenticated])

  const routes = useRoutes([
    {
      element: <Layout />,
      path: '/',
      children: [
        {
          element: <MainPage />,
          index: true,
        },
        {
          element: <NewsPage />,
          path: '/news',
        },
        {
          element: <RequireAuth />,
          children: [
            {
              element: <ProfilePage />,
              path: '/profile',
            },
          ],
        },
      ],
    },
    {
      element: <LoginPage />,
      path: '/auth/login',
    },
  ])

  return (
    <ThemeProvider theme={theme}>{routes}</ThemeProvider>
  )
}

export default App
