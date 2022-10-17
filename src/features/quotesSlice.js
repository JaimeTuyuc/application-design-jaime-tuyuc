/* eslint-disable spaced-comment */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quotesPage: {},
  individualQuotes: [],
  quoteRender: {},
  localesOption: [],
  langCode: '',
};

export const quotesSlice = createSlice({
  name: 'quotes_slise',
  initialState,
  reducers: {
    dispatchContentHomePage(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.quotesPage = action.payload;
    },
    dispatchQuotesContent(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.individualQuotes = action.payload;
    },
    dispatchSingleQuote(state, action) {
      state.quoteRender = action.payload;
    },
    dispatchLocalesOptions(state, action) {
      state.localesOption = action.payload;
    },
    setLocalLang(state, action) {
      state.langCode = action.payload;
    },
  },
});

export const quotesAction = quotesSlice.actions;
