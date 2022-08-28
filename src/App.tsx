import React from 'react'

import { useRoutes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { theme } from './global/Theme'
import RequireAuth from './hocs/RequireAuth'
import { Layout } from './layout/Layout'
import { LoginPage } from './pages/Login/Login'
import { MainPage } from './pages/Main/Main'
import { NewsPage } from './pages/News/News'
import { ProfilePage } from './pages/Profile/Profile'

const App = () => {
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
          element: <LoginPage />,
          path: '/auth/login',
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
  ])

  return (
    <ThemeProvider theme={theme}>{routes}</ThemeProvider>
  )
}

export default App
