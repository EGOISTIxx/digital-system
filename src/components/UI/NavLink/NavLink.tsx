import React from 'react'

import { StyledNavLink } from './SNavLink'

export const NavLink: React.FC<
  React.PropsWithChildren<{ link: string }>
> = (props) => {
  const { children, link } = props

  return <StyledNavLink to={link}>{children}</StyledNavLink>
}
