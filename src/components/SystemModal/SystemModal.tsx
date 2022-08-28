import React from 'react'

import { BaseButton } from '../UI/Button/Button'
import {
  ModalDescription,
  StyledModal,
} from './SSystemModal'

export const SystemModal = (props: {
  code: string
  title: string
  type: 'info' | 'success' | 'error'
  description: string
  isVisible: boolean
  onCancel?: () => void
  onOk?: () => void
}) => {
  const { description, title, isVisible, onCancel, onOk } =
    props
  //TODO: make several types of modal, like Error/Success

  const customFooter = () => {
    return (
      <BaseButton buttonType="base" onClick={onOk}>
        Закрыть
      </BaseButton>
    )
  }

  return (
    <StyledModal
      visible={isVisible}
      title={title}
      onCancel={onCancel}
      onOk={onOk}
      footer={customFooter()}
    >
      <ModalDescription>{description}</ModalDescription>
    </StyledModal>
  )
}
