import { createSlice } from '@reduxjs/toolkit'

const initialState = null;

export const activeTabSlice = createSlice({
  name: 'activeTab',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      return action.payload;
    },
  },
})

export const { setActiveTab } = activeTabSlice.actions

export default activeTabSlice.reducer