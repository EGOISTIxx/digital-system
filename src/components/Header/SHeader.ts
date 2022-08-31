import styled, { css } from 'styled-components'

export const HeaderWrapper = styled.header<{
  isMobile: boolean
}>`
  height: 75px;
  padding: 0 2rem;
  column-gap: 4rem;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.green.green4};
  color: ${(props) => props.theme.colors.gray.gray1};
  position: relative;

  ${(props) => {
    if (props.isMobile) {
      return css`
        & > :last-child {
          position: absolute;
          right: 0rem;
          top: 50%;
          bottom: 50%;
          transform: translate(-50%, -50%);
        }
      `
    }
  }}
`
