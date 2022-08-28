import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
} from 'react'

import {
  StyledTextInput,
  StyledPasswordInput,
} from './STextField'

export interface TextFieldProps {
  label?: string
  value?: string
  type?: 'email' | 'password' | 'text'
  placeholder?: string
  defaultValue?: string
  children?: React.ReactNode
  onChange?: Dispatch<SetStateAction<string>>
}

export const TextField: React.FC<TextFieldProps> = (
  props
) => {
  const { children, type, onChange, ...otherProps } = props

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value: inputValue } = event.target

      if (
        (!/([^A-Za-z0-9@_.])+/g.test(inputValue) ||
          inputValue === '') &&
        type !== 'password'
      ) {
        onChange(inputValue)
      }

      if (
        (/([^А-Яа-я])+/g.test(inputValue) ||
          inputValue === '') &&
        type === 'password'
      ) {
        onChange(inputValue)
      }
    },
    [onChange]
  )

  const inputProps = {
    children,
    type,
    ...otherProps,
  }

  return (
    <>
      {type !== 'password' ? (
        <StyledTextInput
          onChange={handleChange}
          {...inputProps}
        />
      ) : (
        <StyledPasswordInput
          onChange={handleChange}
          {...inputProps}
        />
      )}
    </>
  )
}
