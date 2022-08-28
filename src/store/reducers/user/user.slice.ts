import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    // TODO: remove this localStorage methods when RestAPI will be create
    user: JSON.parse(localStorage.getItem('userData')),
    isUserAuthenticated: Boolean(
      JSON.parse(
        localStorage.getItem('isUserAuthenticated')
      )
    ),
  },
  reducers: {
    setCredentials: (state, action) => {
      const { login, password } = action.payload
      state.user = { login, password }
    },
    setIsUserAuthenticated: (state, action) => {
      const { isUserAuthenticated } = action.payload
      state.isUserAuthenticated = isUserAuthenticated
    },
    logout: (state) => {
      state.user = null
      state.isUserAuthenticated = false
    },
  },
})

export const {
  setCredentials,
  logout,
  setIsUserAuthenticated,
} = userSlice.actions

export const userReducer = userSlice.reducer

export const selectCurrentUser = (state) => state.user.user
export const selectIsAuthenticated = (state) =>
  state.user.isUserAuthenticated
