import { Button } from 'antd'
import styled, { css } from 'styled-components'

const authButtonType = css`
  width: 200px;
  height: 60px;
  background: ${(props) => props.theme.colors.green.green4};
  border-radius: 30px;
  border: none;
  box-shadow: 0px 4px 12px rgba(39, 197, 131, 0.4);

  &:hover {
    background: ${(props) =>
      props.theme.colors.green.green5};
  }

  &:active {
    background: ${(props) =>
      props.theme.colors.green.green8};
  }

  &:focus {
    background: ${(props) =>
      props.theme.colors.green.green4};
    border-color: ${(props) =>
      props.theme.colors.green.green4};
  }

  & span {
    font-size: 0.8rem;
  }
`

const baseButtonType = css`
  background: ${(props) => props.theme.colors.gray.gray7};
  border-color: ${(props) => props.theme.colors.gray.gray7};

  &:hover {
    background: ${(props) => props.theme.colors.gray.gray8};
    border-color: ${(props) =>
      props.theme.colors.gray.gray8};
  }

  &:active {
    background: ${(props) => props.theme.colors.gray.gray9};
  }

  &:focus {
    background: ${(props) => props.theme.colors.gray.gray7};
    border-color: ${(props) =>
      props.theme.colors.gray.gray7};
  }
`

export const StyledButton = styled(Button)<{
  buttonType: 'auth' | 'base'
}>`
  ${(props) => {
    const { buttonType } = props
    switch (buttonType) {
      case 'auth':
        return authButtonType
      case 'base':
        return baseButtonType
    }
  }}
`
