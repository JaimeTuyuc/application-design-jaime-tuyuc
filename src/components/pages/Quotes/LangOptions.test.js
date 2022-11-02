/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
// eslint-disable-next-line no-unused-vars
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import LangOptions from './LangOptions';
import quotes from '../../utils/quotes.json';

describe('All test for LangOptions', () => {
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
  let store;
  it('shoult test all functions of LangOptions.js', () => {
    store = mockedStore(initialState);
    render(
      <Provider store={store}>
        <LangOptions options={quotes.localesOption} />
      </Provider>,
    );
  });

  it('should check all HTML tags are display on the DOM', () => {
    render(
      <Provider store={store}>
        <LangOptions options={quotes.localesOption} />
      </Provider>,
    );

    const selectEle = screen.getByTestId('selectContainer');
    const emptyOpt = screen.getByTestId('emptyVal');
    const valOpt = screen.getAllByTestId('langOpt');
    expect(valOpt[0].innerHTML).toBe('English (United States)');
    expect(valOpt[1].innerHTML).toBe('Portuguese (Brazil)');
    expect(emptyOpt).toBeInTheDocument();
    expect(selectEle).toBeInTheDocument();
  });

  describe('check the select change its value', () => {
    it('should trigger the value change', () => {
      render(
        <Provider store={store}>
          <LangOptions options={quotes.localesOption} />
        </Provider>,
      );

      const selectOpt = screen.getByTestId('selectContainer');
      fireEvent.change(selectOpt, {
        target: { value: 'English (United States)' },
        code: { value: 'en-US' },
      });

      expect(selectOpt.value).toBe('English (United States)');
    });
  });
});
