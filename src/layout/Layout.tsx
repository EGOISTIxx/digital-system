import React from 'react'

import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import { Header } from '../components/Header/Header'

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const Layout: React.FC = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
    </LayoutWrapper>
  )
}
