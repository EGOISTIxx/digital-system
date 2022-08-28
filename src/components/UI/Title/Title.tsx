import React from 'react'

import styled from 'styled-components'

const StyledTitle = styled.div`
  font-size: 1.5rem;
  font-family: Roboto;
  text-transform: uppercase;
  font-weight: 700;
`

export const Title: React.FC<
  React.PropsWithChildren<unknown>
> = (props) => {
  const { children } = props

  return (
    <StyledTitle>{children}</StyledTitle>
  )
}
