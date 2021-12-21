import { configureStore } from '@reduxjs/toolkit';
import rangeReducer from './features/range/rangeSlice';
import activeMonthsReducer from './features/active-months/activeMonthsSlice';

export const store = configureStore({
  reducer: {
    dateRange: rangeReducer,
    activeMonths: activeMonthsReducer,
  },
});
