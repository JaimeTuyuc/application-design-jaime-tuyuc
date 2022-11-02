/* eslint-disable import/prefer-default-export */
/* eslint-disable prettier/prettier */
/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../config/config';
import { quotesAction } from '../features/quotesSlice';

export const getAllHomeContent = createAsyncThunk(
  'get_home_data',
  async (language, thunkApi) => {
    try {
      const result = await client.getEntries({ content_type: process.env.REACT_APP_HOME_QUOTES, locale: language });
      thunkApi.dispatch(quotesAction.dispatchContentHomePage(result?.items[0]?.fields));
      thunkApi.dispatch(quotesAction.setLocalLang(result?.items[0]?.sys?.locale));
    } catch (error) {
      console.log(error, 'unable to get data');
    }
  },
);

export const getAllQuotes = createAsyncThunk(
  'get_all_quotes',
  async (language, thunkApi) => {
    try {
      const result = await client.getEntries({ content_type: process.env.REACT_APP_SINGLE_QUOTES, locale: language });
      thunkApi.dispatch(quotesAction.dispatchQuotesContent(result.items));
      if (result.items.length === 0) {
        thunkApi.dispatch(quotesAction.dispatchSingleQuote({}));
      }
      thunkApi.dispatch(quotesAction.dispatchSingleQuote(result.items[0]));
    } catch (error) {
      console.log(error, 'unable to get all quotes');
    }
  },
);

export const getAllAvailableLocale = createAsyncThunk(
  'get_locales',
  async (_, thunkApi) => {
    try {
      const result = await client.getLocales();
      thunkApi.dispatch(quotesAction.dispatchLocalesOptions(result.items));
    } catch (error) {
      console.log(error, 'Unable to get data')
    }
  }
)