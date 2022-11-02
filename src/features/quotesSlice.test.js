/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import quotes from '../components/utils/quotes.json';
import { quotesAction, quotesSlice } from './quotesSlice';

describe('test for quotesSlice and reducer file and functions', () => {
  const initialState = {
    quotes: {
      quotesPage: {},
      individualQuotes: [],
      quoteRender: {},
      localesOption: [],
      langCode: '',
    },
  };
  const middlewares = [thunk];
  const mockedStore = configureStore(middlewares);
  const store = mockedStore(initialState);
  it('should check the initial state', () => {
    const action = { type: 'unknown' };
    const expectedState = initialState;

    expect(quotesSlice.reducer(initialState, action)).toEqual(expectedState);
  });

  it('should add the content of homePageQuotes', () => {
    const testInitialState = { ...initialState, quotesPage: {} };
    const action = quotesAction.dispatchContentHomePage(quotes.quotesPage);
    const expectedState = { ...initialState, quotesPage: quotes.quotesPage };
    expect(quotesSlice.reducer(testInitialState, action)).toEqual(
      expectedState,
    );
  });

  it('should add the getAllQuotes content to the reducer funcion', () => {
    const testInitialState = { ...initialState, individualQuotes: [] };
    const action = quotesAction.dispatchQuotesContent(quotes.quotes);
    const expectedState = { ...initialState, individualQuotes: quotes.quotes };
    expect(quotesSlice.reducer(testInitialState, action)).toEqual(
      expectedState,
    );
  });
  it('should add a single quote to the reducer', () => {
    const testInitialState = { ...initialState, quoteRender: {} };
    const action = quotesAction.dispatchSingleQuote(quotes.singleQuote);
    const expectedState = { ...initialState, quoteRender: quotes.singleQuote };
    expect(quotesSlice.reducer(testInitialState, action)).toEqual(
      expectedState,
    );
  });
  it('should add an empty object if no quotes are found', () => {
    const testInitialState = { ...initialState, quoteRender: {} };
    const action = quotesAction.dispatchSingleQuote({});
    const expectedState = { ...initialState, quoteRender: {} };
    expect(quotesSlice.reducer(testInitialState, action)).toEqual(
      expectedState,
    );
  });

  it('should add the locales to the reducer', () => {
    const initialStateLocales = { ...initialState, localesOption: [] };
    const action = quotesAction.dispatchLocalesOptions(quotes.localesOption);
    const expectedState = {
      ...initialState,
      localesOption: quotes.localesOption,
    };
    expect(quotesSlice.reducer(initialStateLocales, action)).toEqual(
      expectedState,
    );
  });

  it('should add a lang code by default', () => {
    const initialStateLangCode = { ...initialState, langCode: '' };
    const action = quotesAction.setLocalLang(quotes.langCode);
    const expectedState = { ...initialState, langCode: quotes.langCode };
    expect(quotesSlice.reducer(initialStateLangCode, action)).toEqual(
      expectedState,
    );
  });
});
