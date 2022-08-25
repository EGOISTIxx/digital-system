import React from 'react'

import { NavLink } from '../../../UI/NavLink/NavLink'
import { NavBarWrapper } from './SNavBar'

export const NavBar = () => (
  <NavBarWrapper>
    <NavLink link='news'>новости</NavLink>
    <NavLink link='profile'>профиль</NavLink>
  </NavBarWrapper>
)
