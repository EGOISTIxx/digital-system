import styled from 'styled-components'

import { ReactComponent as LogoutLogo } from '../../../../assets/icons/logout.svg'

export const LogoutWrapper = styled.div`
  position: absolute;
  right: 2rem;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`

export const UserData = styled.span`
  color: ${(props) => props.theme.colors.gray.gray1};
  font-size: ${(props) => props.theme.fontSize.essize};
`

export const StyledLogoutLogo = styled(LogoutLogo)`
  cursor: pointer;
`
