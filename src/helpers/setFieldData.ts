import { FormInstance } from 'antd'

import { Login } from '../constants/login'

export const setFieldData = (
  form: FormInstance<unknown>,
  regexpResult: boolean,
  value: string,
  fieldType: Login
) => {
  if (regexpResult) {
    form.setFieldValue(
      fieldType,
      value.substring(0, value.length - 1)
    )
    return
  }

  form.setFieldValue(fieldType, value)
}
