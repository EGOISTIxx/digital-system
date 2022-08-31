import React, {
  useCallback,
  useMemo,
  useState,
} from 'react'

import { MenuOutlined } from '@ant-design/icons'

import { BaseButton } from '../../../UI/Button/Button'
import { NavBar } from '../NavBar/NavBar'
import { User } from '../User/User'
import { StyledPopover } from './SPopoverMenu'

export const PopoverMenu = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleChange = useCallback(
    (newVisible: boolean) => {
      setIsVisible(newVisible)
    },
    [isVisible]
  )

  const handleClickHidePopover = useCallback(() => {
    setIsVisible(false)
  }, [setIsVisible])

  const content = useMemo(
    () => (
      <>
        <NavBar />
        <User
          handleClickHidePopover={handleClickHidePopover}
        />
      </>
    ),
    [handleClickHidePopover]
  )

  return (
    <StyledPopover
      visible={isVisible}
      title="Меню"
      content={content}
      trigger="click"
      placement="bottomRight"
      onVisibleChange={handleChange}
    >
      <BaseButton buttonType="base">
        <MenuOutlined />
      </BaseButton>
    </StyledPopover>
  )
}
