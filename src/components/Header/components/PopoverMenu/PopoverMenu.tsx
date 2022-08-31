import React, { useMemo } from 'react'

import { MenuOutlined } from '@ant-design/icons'

import { BaseButton } from '../../../UI/Button/Button'
import { NavBar } from '../NavBar/NavBar'
import { User } from '../User/User'
import { StyledPopover } from './SPopoverMenu'

export const PopoverMenu = React.forwardRef((_, ref) => {
  const content = useMemo(
    () => (
      <>
        <NavBar />
        <User />
      </>
    ),
    []
  )

  return (
    <StyledPopover
      ref={ref}
      title="Меню"
      content={content}
      trigger="click"
      placement="bottomRight"
    >
      <BaseButton buttonType="base">
        <MenuOutlined />
      </BaseButton>
    </StyledPopover>
  )
})

PopoverMenu.displayName = 'PopoverMenu'
