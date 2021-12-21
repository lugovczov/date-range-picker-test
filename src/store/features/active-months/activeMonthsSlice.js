import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  left: null,
  right: null,
}

export const activeMonthsSlice = createSlice({
  name: 'activeMonths',
  initialState,
  reducers: {
    setLeftMonth: (state, action) => {
      state.left = action.payload;
    },
    setRightMonth: (state, action) => {
      state.right = action.payload;
    }
  },
})

export const { setLeftMonth, setRightMonth } = activeMonthsSlice.actions

export default activeMonthsSlice.reducer