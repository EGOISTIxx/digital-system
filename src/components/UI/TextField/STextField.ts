import { Input } from 'antd'
import styled, { css } from 'styled-components'

const { Password } = Input

const InputStyles = css`
  border: none;
  border-bottom: 2px solid
    ${(props) => props.theme.colors.gray.gray3};
  padding: 12px 0px;

  &:hover,
  &:focus {
    border-color: ${(props) =>
      props.theme.colors.green.green4} !important;
    box-shadow: none !important;
    outline: none;
  }

  input {
    font-size: 0.8rem;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.866667px;

    &::placeholder {
      color: ${(props) =>
        props.theme.colors.gray.gray4} !important;
      font-weight: 700 !important;
    }
  }
`

export const StyledTextInput = styled(Input)`
  ${InputStyles}
`

export const StyledPasswordInput = styled(Password)`
  ${InputStyles}
`
