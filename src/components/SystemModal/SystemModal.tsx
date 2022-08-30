import React, { useCallback, useMemo } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import {
  selectIsModalVisible,
  selectSystemMessage,
  setIsModalVisible,
  setSystemMessage,
} from '../../store/reducers/systemModal/systemModal.slice'
import { BaseButton } from '../UI/Button/Button'
import {
  ModalDescription,
  StyledModal,
} from './SSystemModal'

export const SystemModal = () => {
  //TODO: make several types of modal, like Error/Success
  const initialModalState = useMemo(
    () => ({
      isModalVisible: false,
      systemMessage: {
        title: '',
        description: '',
      },
    }),
    []
  )

  const dispatch = useDispatch()
  const isModalVisible = useSelector(selectIsModalVisible)
  const systemMessage = useSelector(selectSystemMessage)

  const { title, description } = systemMessage

  const handleCloseModal = useCallback(() => {
    dispatch(
      setIsModalVisible(initialModalState.isModalVisible)
    )
    dispatch(
      setSystemMessage(initialModalState.systemMessage)
    )
  }, [setIsModalVisible, setSystemMessage])

  const customFooter = () => {
    return (
      <BaseButton
        buttonType="base"
        onClick={handleCloseModal}
      >
        Закрыть
      </BaseButton>
    )
  }

  return (
    <StyledModal
      visible={isModalVisible}
      title={title}
      onCancel={handleCloseModal}
      onOk={handleCloseModal}
      footer={customFooter()}
    >
      <ModalDescription>{description}</ModalDescription>
    </StyledModal>
  )
}
