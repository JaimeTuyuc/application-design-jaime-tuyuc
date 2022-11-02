/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable jest/no-mocks-import */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import quotes from './components/utils/quotes.json';
import { getLanguagePref as mockedGetLangue } from '../__mocks__/getLanguage';

// Activate the mocks
jest.mock('../__mocks__/getLanguage.js');

describe('All test for App.jsx', () => {
  beforeEach(() => {
    mockedGetLangue.mockClear();
  });

  const initialState = {
    quotes: {
      quotesPage: {},
      individualQuotes: quotes.quotes,
      quoteRender: {},
      localesOption: [],
      langCode: '',
    },
  };
  const middlewares = [thunk];
  const mockedStore = configureStore(middlewares);
  let store;
  it('should pass all test for app.jsx', () => {
    store = mockedStore(initialState);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    );
  });

  it('should return a typeof code string', () => {
    const data = mockedGetLangue();
    expect.stringContaining(data);
  });

  it('should return a string code', () => {
    const data = mockedGetLangue();
    expect(mockedGetLangue).toHaveBeenCalledTimes(1);
    expect(data).toBe('pt-BR');
  });

  it('should check that routes are mounted correctly', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    );

    const homeRoute = screen.getByTestId('containerRoutes');
    expect(homeRoute).toBeTruthy();
  });
});
