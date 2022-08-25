import React, { useEffect } from 'react'

import { Button, Checkbox, Form, Input } from 'antd'
import { useSelector } from 'react-redux'
import { useRoutes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { config } from './config'
import { theme } from './global/Theme'
import { Layout } from './layout/Layout'
import { MainPage } from './pages/Main/Main'
import { NewsPage } from './pages/News/News'
import { ProfilePage } from './pages/Profile/Profile'
import { useLoginMutation } from './service/auth/authApi'
import { store } from './store'
import { ILogin } from './types/auth'

const App = () => {
  // const [login] = useLoginMutation()

  // const selector = useSelector(store => store)

  // useEffect(() => {
  //   getTodos()
  // }, [])

  // const handleFinish = async (values: ILogin) => {
  //   await login(values)
  //     .then((data) => {
  //       console.log(data)
  //     })
  //     .finally(() => {
  //       if (
  //         values.login === config.userData.login &&
  //         values.password === config.userData.password
  //       ) {
  //         console.table('Success')
  //       }
  //     })
  // }

  // console.log(selector)

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
          element: <ProfilePage />,
          path: '/profile',
        },
      ],
    },
  ])

  return (
    <ThemeProvider theme={theme}>{routes}</ThemeProvider>
  )
}

export default App
