import { Form } from 'antd'
import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 300px;
  
  & > :first-child {
    margin-bottom: 1rem;
  }

  & > :nth-child(2) {
    margin-bottom: 2.5rem;
  }
`

export const StyledForm = styled(Form)`
  & > :nth-child(2) {
    margin-bottom: 3rem;
  }
`
