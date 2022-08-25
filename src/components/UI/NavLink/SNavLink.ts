import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSize.essize};
`
