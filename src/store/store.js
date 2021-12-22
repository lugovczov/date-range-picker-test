import { configureStore } from '@reduxjs/toolkit';
import rangeReducer from './features/range/rangeSlice';
import activeMonthsReducer from './features/active-months/activeMonthsSlice';
import activeTabReducer from './features/active-tab/activeTabSlice';

export const store = configureStore({
  reducer: {
    dateRange: rangeReducer,
    activeMonths: activeMonthsReducer,
    activeTab: activeTabReducer,
  },
});
