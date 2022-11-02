/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
// eslint-disable-next-line no-unused-vars
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './HomePage';
import quotes from '../../utils/quotes.json';
import LangOptions from '../Quotes/LangOptions';

describe('All test for Render Functions and Render of HomePage', () => {
  const initialState = {
    quotes: {
      quotesPage: quotes.quotesPage,
      individualQuotes: quotes.quotes,
      quoteRender: {},
      localesOption: quotes.localesOption,
      langCode: '',
    },
  };

  const mockedStore = configureStore();
  let store;
  it('shoult test all functions of HomePage', () => {
    store = mockedStore(initialState);
    render(
      <BrowserRouter>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </BrowserRouter>,
    );
  });

  it('Should check all the HTML tags elements are shown on the screen', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <HomePage>
            <LangOptions options={quotes?.localesOption} />
          </HomePage>
        </Provider>
      </BrowserRouter>,
    );
    const bgHomePage = screen.getByTestId('backgroundHomePage');
    const titleHome = screen.getByTestId('titleHome');
    const descHome = screen.getByTestId('descriptionHome');
    const btnHome = screen.getByTestId('buttonQuotes');
    const bgImage = screen.getByTestId('bgImage');
    expect(bgImage).toHaveStyle('backround-image:');
    expect(bgImage).toBeInTheDocument();
    expect(titleHome).toBeInTheDocument();
    expect(descHome).toBeInTheDocument();
    expect(btnHome).toBeInTheDocument();
    expect(bgHomePage).toBeInTheDocument();
  });
});
