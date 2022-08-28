import React from 'react'

import { StyledButton } from './SButton'

export const BaseButton: React.FC<
  React.PropsWithChildren<{ buttonType: 'auth' | 'base', htmlType?: 'submit', onClick?: () => void }>
> = (props) => {
  const { children, buttonType, onClick } = props

  return <StyledButton type='primary' buttonType={buttonType} htmlType='submit' onClick={onClick}>{children}</StyledButton>
}
