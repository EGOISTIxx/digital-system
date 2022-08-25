import React from 'react'

import styled from 'styled-components'

const MainPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSize.ssize};
  flex: 1 0 auto;
`

export const MainPage: React.FC = () => {
  return <MainPageWrapper>главная страница</MainPageWrapper>
}
