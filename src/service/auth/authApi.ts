import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

import { API_URL } from '../../constants/api'
import { ILogin } from '../../types/auth'

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    login: build.mutation({
      query: ({ login, password }: ILogin) => ({
        url: `auth`,
        method: 'POST',
        body: { login, password }
      }),
    }),
  }),
})

export const { useLoginMutation } = authAPI

export const { login } = authAPI.endpoints
