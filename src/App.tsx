import React from 'react'

import { Button, Checkbox, Form, Input } from 'antd'

import { config } from './config'
import { useLoginMutation } from './service/auth/authApi'
import { ILogin } from './types/auth'
import { store } from './store'

const App = () => {
  const [login] = useLoginMutation()

  const handleFinish = async (values: ILogin) => {
    await login(values)
      .then((data) => {
        console.log(data)
      })
      .finally(() => {
        if (
          values.login === config.userData.login &&
          values.password === config.userData.password
        ) {
          console.table('Success')
        }
      })
  }

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={handleFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Login"
        name="login"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default App
