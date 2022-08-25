import React from 'react'

import styled from 'styled-components'

const NewsPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSize.ssize};
  flex: 1 0 auto;
`

export const NewsPage: React.FC = () => {
  return <NewsPageWrapper>новости</NewsPageWrapper>
}
