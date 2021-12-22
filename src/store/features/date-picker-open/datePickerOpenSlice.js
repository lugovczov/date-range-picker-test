import { createSlice } from '@reduxjs/toolkit'

const initialState = false;

export const datePickerOpenSlice = createSlice({
  name: 'isDatePickerOpen',
  initialState,
  reducers: {
    setDatePickerOpen: (state, action) => {
      return action.payload;
    },
  },
})

export const { setDatePickerOpen } = datePickerOpenSlice.actions

export default datePickerOpenSlice.reducer