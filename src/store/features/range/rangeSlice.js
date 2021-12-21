import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  from: null,
  to: null,
}

export const rangeSlice = createSlice({
  name: 'dateRange',
  initialState,
  reducers: {
    setFromRange: (state, action) => {
      state.from = action.payload;
    },
    setToRange: (state, action) => {
      state.to = action.payload;
    }
  },
})

export const { setFromRange, setToRange } = rangeSlice.actions

export default rangeSlice.reducer