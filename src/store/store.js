import { configureStore } from '@reduxjs/toolkit';
import rangeReducer from './features/range/rangeSlice';

export const store = configureStore({
  reducer: {
    dateRange: rangeReducer,
    // showing month slice (2)
  },
});
