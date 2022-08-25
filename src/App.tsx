import React, { useEffect } from 'react'

import { Button, Checkbox, Form, Input } from 'antd'
import { useSelector } from 'react-redux'
import { useRoutes } from 'react-router-dom'

import { config } from './config'
import { Layout } from './layout/Layout'
import { useLoginMutation } from './service/auth/authApi'
import { store } from './store'
import { ILogin } from './types/auth'
import { ThemeProvider } from 'styled-components'
import { theme } from './global/Theme'

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
    },
  ])

  return <ThemeProvider theme={theme}>{routes}</ThemeProvider>
}

export default App
