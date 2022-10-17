import { configureStore } from '@reduxjs/toolkit';
import { quotesSlice } from '../features/quotesSlice';

const store = configureStore({
  reducer: {
    quotes: quotesSlice.reducer,
  },
});

export default store;
