import React, { memo, useCallback } from 'react'

import PropTypes from 'prop-types'

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
  onChange?: () => void
}

export const TextField: React.FC<TextFieldProps> = memo(
  (props) => {
    const { type, ...otherProps } = props

    const handleBoardKeyPress = useCallback((event) => {
      event.preventDefault()
      return false
    }, [])

    const inputProps = {
      onCopy: handleBoardKeyPress,
      onDrag: handleBoardKeyPress,
      onDrop: handleBoardKeyPress,
      onPaste: handleBoardKeyPress,
      type,
      ...otherProps,
    }

    return (
      <>
        {type !== 'password' ? (
          <StyledTextInput
            onPaste={(e) => {
              e.preventDefault()
              return false
            }}
            {...inputProps}
          />
        ) : (
          <StyledPasswordInput {...inputProps} />
        )}
      </>
    )
  }
)

TextField.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['email', 'password', 'text']),
}

TextField.displayName = 'TextField'
