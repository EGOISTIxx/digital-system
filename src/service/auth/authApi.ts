import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

import { API_URL } from '../../constants/api'

export const authAPI = createApi({
  reducerPath: 'digitalSystemAPI',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    
  })
})
