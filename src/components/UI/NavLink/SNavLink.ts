import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSize.essize};
  position: relative;

  &.active {
    &::before {
      position: absolute;
      content: '';
      height: 4px;
      width: 100%;
      border-radius: 4px;
      background: ${(props) =>
        props.theme.colors.gray.gray1};
      top: 1.5rem;
      opacity: 0.5;
    }
  }
`
