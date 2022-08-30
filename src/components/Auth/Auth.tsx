/* eslint-disable @typescript-eslint/no-namespace */

/* eslint-disable @typescript-eslint/prefer-namespace-keyword */
import React, { memo, PropsWithChildren } from 'react'

import { FormInstance } from 'antd'

import { BaseButton } from '../UI/Button/Button'
import {
  TextField,
  TextFieldProps,
} from '../UI/TextField/TextField'
import { Title } from '../UI/Title/Title'
import { ContentWrapper, StyledForm } from './SAuth'

function Auth(props: { children: React.ReactNode }) {
  const { children } = props
  return <ContentWrapper>{children}</ContentWrapper>
}

module Auth {
  export const Heading = (
    props: PropsWithChildren<{ children: string }>
  ) => {
    const { children } = props

    return <Title>{children}</Title>
  }

  export const Field = memo((props: TextFieldProps) => {
    const { children, ...otherProps } = props

    return (
      <TextField value={otherProps.value} {...otherProps}>
        {children}
      </TextField>
    )
  })

  export const Form = memo(
    (props: {
      form: FormInstance<unknown>
      onFinish: (values) => void
      initialValues: { login: string; password: string }
      children: React.ReactNode | string
      onFieldsChange: (changedField, allFields) => void
    }) => {
      const { children, form, ...otherProps } = props

      return (
        <StyledForm form={form} {...otherProps}>
          {children}
        </StyledForm>
      )
    }
  )

  export const FormItem = memo(
    (props: {
      children: React.ReactNode
      name?: string
    }) => {
      const { children, ...otherProps } = props

      return (
        <StyledForm.Item
          rules={[
            {
              required: true,
              message: 'Поле должно быть заполнено',
            },
          ]}
          {...otherProps}
        >
          {children}
        </StyledForm.Item>
      )
    }
  )

  export const Button = memo(
    (props: {
      children: string
      buttonType: 'auth' | 'base'
      htmlType: 'submit'
    }) => {
      const { children, buttonType, htmlType } = props

      return (
        <BaseButton
          buttonType={buttonType}
          htmlType={htmlType}
        >
          {children}
        </BaseButton>
      )
    }
  )

  Button.displayName = 'Button'
  FormItem.displayName = 'FormItem'
  Field.displayName = 'Field'
  Form.displayName = 'Form'
}

export { Auth }
