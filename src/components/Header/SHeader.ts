import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  height: 75px;
  padding: 0 2rem;
  column-gap: 4rem;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.green.green4};
  color: ${(props) => props.theme.colors.gray.gray1};
  position: relative;
`
