import styled from 'styled-components'

export const LoginPageWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.gray.gray1};
`

export const FormWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
