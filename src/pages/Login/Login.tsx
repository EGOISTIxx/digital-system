import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as LoupeSVG } from '../../assets/icons/loupe.svg'
import LoginBannerSVG from '../../assets/login/svgs/loginBanner.svg'
import { Auth } from '../../components/Auth/Auth'
import { SystemModal } from '../../components/SystemModal/SystemModal'
import { Image } from '../../components/UI/Image/Image'
import { config } from '../../config'
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

  const [formDataLogin, setFormDataLogin] = useState('')

  const [formDataPassword, setFormDataPassword] =
    useState('')

  const { Heading, Field, Form, FormItem, Button } = Auth

  const handleFinish = async (values: ILogin) => {
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
        navigate('/profile')
        dispatch(setCredentials({ ...values }))
      } else {
        //TODO: error emulation
        const errorMessage = systemMessages.find(
          (message) => message.code === 'invalidLogin'
        )

        setError(errorMessage)
        setIsModalVisible(true)
      }
    })
  }

  const handleFinishError = (errorInfo) => {
    console.log(errorInfo)
  }

  const handleCloseModal = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <LoginPageWrapper>
        <FormWrapper>
          <Auth>
            <LoupeSVG />
            <Heading>профиль</Heading>
            <Form
              onFinish={handleFinish}
              onFinishFailed={handleFinishError}
              initialValues={{
                login: formDataLogin,
                password: formDataPassword,
              }}
            >
              <FormItem name="login">
                <Field
                  type="text"
                  placeholder="ЛОГИН"
                  value={formDataLogin}
                  onChange={setFormDataLogin}
                />
              </FormItem>
              <FormItem name="password">
                <Field
                  type="password"
                  placeholder="ПАРОЛЬ"
                  value={formDataPassword}
                  onChange={setFormDataPassword}
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
