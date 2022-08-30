import React, { useCallback, useMemo } from 'react'

import { Form as AntdForm } from 'antd'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as LoupeSVG } from '../../assets/icons/loupe.svg'
import LoginBannerSVG from '../../assets/login/svgs/loginBanner.svg'
import { Auth } from '../../components/Auth/Auth'
import { Image } from '../../components/UI/Image/Image'
import { config } from '../../config'
import { Login } from '../../constants/login'
import { setFieldData } from '../../helpers/setFieldData'
import { systemMessages } from '../../messages/systemMessages'
import { useLoginMutation } from '../../service/auth/authApi'
import {
  setIsModalVisible,
  setSystemMessage,
} from '../../store/reducers/systemModal/systemModal.slice'
import {
  setCredentials,
  setIsUserAuthenticated,
} from '../../store/reducers/user/user.slice'
import { ILogin } from '../../types/auth'
import { FormWrapper, LoginPageWrapper } from './SLogin'

export const LoginPage: React.FC = () => {
  // пример работы с сервисом для логина пользователя, соответсвенно, когда будет рест апи или граф куэль
  const [login] = useLoginMutation()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const { Heading, Field, Form, FormItem, Button } = Auth

  const [form] = AntdForm.useForm()

  const initialFormValue = useMemo(
    () => ({
      login: '',
      password: '',
    }),
    []
  )

  const handleFinish = useCallback(
    async (values: ILogin) => {
      await new Promise((resolve, reject) => {
        // то что тут выводится ошибка в консоли - норма потому что есть реджект на 84 строке
        setTimeout(() => {
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
            resolve(1)
          } else {
            // error emulation
            const errorMessage = systemMessages.find(
              (message) => message.code === 'invalidLogin'
            )

            dispatch(setSystemMessage(errorMessage))
            dispatch(setIsModalVisible(true))
            reject(new Error('Warning'))
          }
        }, 1000)
      })
    },
    []
  )

  const handleFieldChange = useCallback(
    (changedField) => {
      const value = changedField[0].value
      const name = changedField[0].name[0]

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
              initialValues={initialFormValue}
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
      </LoginPageWrapper>
    </>
  )
}
