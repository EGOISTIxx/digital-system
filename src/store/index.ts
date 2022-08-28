// import { useMemo } from 'react'
import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'
import {
  useSelector,
  useDispatch,
  TypedUseSelectorHook,
} from 'react-redux'
import { Reducer } from 'redux'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'

import { authAPI } from '../service/auth/authApi'
import { userReducer } from './reducers/user/user.slice'
import { RESET_STATE_ACTION_TYPE } from './resetState'

const reducers = {
  user: userReducer,
  [authAPI.reducerPath]: authAPI.reducer,
}

const combinedReducer =
  combineReducers<typeof reducers>(reducers)

export const rootReducer: Reducer<RootState> = (
  state,
  action
) => {
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = {} as RootState
  }

  return combinedReducer(state, action)
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          REHYDRATE,
        ],
      },
    }).concat(authAPI.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof combinedReducer>
export const useTypedDispatch = () =>
  useDispatch<AppDispatch>()
export const useTypedSelector: TypedUseSelectorHook<RootState> =
  useSelector
