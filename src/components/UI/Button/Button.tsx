import React, { memo } from 'react'

import PropTypes from 'prop-types'

import { StyledButton } from './SButton'

export const BaseButton: React.FC<
  React.PropsWithChildren<{
    buttonType: 'auth' | 'base'
    htmlType?: 'submit'
    onClick?: () => void
  }>
> = memo((props) => {
  const { children, buttonType, onClick } = props

  return (
    <StyledButton
      type="primary"
      buttontype={buttonType}
      htmlType="submit"
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
})

BaseButton.propTypes = {
  buttonType: PropTypes.oneOf(['auth', 'base']),
  children: PropTypes.node,
  onClick: PropTypes.func,
}

BaseButton.displayName = 'BaseButton'
