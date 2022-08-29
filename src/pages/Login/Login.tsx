import React, { useCallback, useState } from 'react'

import { Form as AntdForm } from 'antd'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as LoupeSVG } from '../../assets/icons/loupe.svg'
import LoginBannerSVG from '../../assets/login/svgs/loginBanner.svg'
import { Auth } from '../../components/Auth/Auth'
import { SystemModal } from '../../components/SystemModal/SystemModal'
import { Image } from '../../components/UI/Image/Image'
import { config } from '../../config'
import { Login } from '../../constants/login'
import { setFieldData } from '../../helpers/setFieldData'
import { systemMessages } from '../../messages/systemMessages'
import { useLoginMutation } from '../../service/auth/authApi'
import {
  setCredentials,
  setIsUserAuthenticated,
} from '../../store/reducers/user/user.slice'
import { ILogin } from '../../types/auth'
import { FormWrapper, LoginPageWrapper } from './SLogin'

export const LoginPage: React.FC = () => {
  const [login] = useLoginMutation()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [error, setError] = useState<{
    code: string
    title: string
    type: 'info' | 'success' | 'error'
    description: string
  }>()

  const [isModalVisible, setIsModalVisible] =
    useState(false)

  const { Heading, Field, Form, FormItem, Button } = Auth

  const [form] = AntdForm.useForm()

  const handleFinish = useCallback(
    async (values: ILogin) => {
      await login(values).then(() => {
        // TODO: replace to try/catch construction when app will be grow
        if (
          values.login === config.userData.login &&
          values.password === config.userData.password
        ) {
          JSON.stringify(
            localStorage.setItem(
              'isUserAuthenticated',
              JSON.stringify(true)
            )
          )
          JSON.stringify(
            localStorage.setItem(
              'userData',
              JSON.stringify(values)
            )
          )
          dispatch(
            setIsUserAuthenticated({
              isUserAuthenticated: true,
            })
          )
          dispatch(setCredentials(values))
          navigate('/profile')
        } else {
          //TODO: error emulation
          const errorMessage = systemMessages.find(
            (message) => message.code === 'invalidLogin'
          )

          setError(errorMessage)
          setIsModalVisible(true)
        }
      })
    },
    []
  )

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false)
  }, [])

  const handleFieldChange = useCallback(
    (changedField) => {
      const value = changedField[0].value
      const name = changedField[0].name[0]

      // TODO: make helper function to this code block
      switch (name) {
        case Login.login:
          setFieldData(
            form,
            /([^A-Za-z0-9@_.])+/g.test(value),
            value,
            Login.login
          )

          return
        case Login.password:
          setFieldData(
            form,
            !/([^А-Яа-я])+/g.test(value),
            value,
            Login.password
          )
          return
      }
    },
    [form]
  )

  console.log('render')

  return (
    <>
      <LoginPageWrapper>
        <FormWrapper>
          <Auth>
            <LoupeSVG />
            <Heading>профиль</Heading>
            <Form
              form={form}
              onFieldsChange={handleFieldChange}
              onFinish={handleFinish}
              initialValues={{
                login: '',
                password: '',
              }}
            >
              <FormItem name="login">
                <Field type="text" placeholder="ЛОГИН" />
              </FormItem>
              <FormItem name="password">
                <Field
                  type="password"
                  placeholder="ПАРОЛЬ"
                />
              </FormItem>
              <FormItem>
                <Button htmlType="submit" buttonType="auth">
                  войти
                </Button>
              </FormItem>
            </Form>
          </Auth>
        </FormWrapper>
        <Image image={LoginBannerSVG} />
        <SystemModal
          onCancel={handleCloseModal}
          onOk={handleCloseModal}
          isVisible={isModalVisible}
          {...error}
        />
      </LoginPageWrapper>
    </>
  )
}
