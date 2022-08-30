import { createSlice } from '@reduxjs/toolkit'

const systemModalSlice = createSlice({
  name: 'systemModal',
  initialState: {
    isModalVisible: false,
    systemMessage: {
      title: '',
      description: ''
    },
  },
  reducers: {
    setIsModalVisible: (state, action) => {
      const isModalVisible = action.payload
      state.isModalVisible = isModalVisible
    },
    setSystemMessage: (state, action) => {
      const systemMessage = action.payload
      state.systemMessage = systemMessage
    },
  },
})

export const { setIsModalVisible, setSystemMessage } =
  systemModalSlice.actions

export const systemModalReducder = systemModalSlice.reducer

export const selectIsModalVisible = (state) =>
  state.systemModal.isModalVisible
export const selectSystemMessage = (state) =>
  state.systemModal.systemMessage
