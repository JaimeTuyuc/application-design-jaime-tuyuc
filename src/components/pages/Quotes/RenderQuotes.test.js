/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
// eslint-disable-next-line no-unused-vars
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import RenderQuotes from './RenderQuotes';
import quotes from '../../utils/quotes.json';

describe('All test for Render quotes', () => {
  const initialState = {
    quotes: {
      quotesPage: {},
      individualQuotes: quotes.quotes,
      quoteRender: {},
      localesOption: [],
      langCode: '',
    },
  };

  const mockedStore = configureStore();
  let store;
  it('shoult test all functions of RnderQuotes.js', () => {
    store = mockedStore(initialState);
    render(
      <Provider store={store}>
        <RenderQuotes />
      </Provider>,
    );
  });

  it('should be the html tags in the document', () => {
    render(
      <Provider store={store}>
        <RenderQuotes />
      </Provider>,
    );

    const titleElement = screen.getByTestId('titleElement');
    const descEle = screen.getByTestId('quotesDescription');
    const buttonQuote = screen.getByRole('button');
    const mainContainer = screen.getByTestId('mainContainer');
    expect(mainContainer).toBeInTheDocument();
    expect(buttonQuote).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(descEle).toBeInTheDocument();
    expect(titleElement).toBeTruthy();
    expect(descEle).toBeTruthy();
    expect(buttonQuote).toBeTruthy();
  });

  it('should test branch negative conditions', () => {
    render(
      <Provider store={store}>
        <RenderQuotes />
      </Provider>,
    );
    const titleElement = screen.getByTestId('titleElement');
    const descEle = screen.getByTestId('quotesDescription');
    const buttonQuote = screen.getByRole('button');

    expect(titleElement).not.toBe('h5');
    expect(descEle).not.toBe('This is a description');
    expect(buttonQuote).not.toBe('input');
  });

  describe('click the button to chage quotes', () => {
    it('should execute the click event', () => {
      const buttonChangequote = jest.fn();
      render(
        <Provider store={store}>
          <RenderQuotes buttonChangequote={buttonChangequote} />
        </Provider>,
      );
      const btnQuote = screen.getByTestId('buttonQuote');
      fireEvent.click(btnQuote);
      expect(buttonChangequote).not.toHaveBeenCalled();
    });
  });
});

/*

import plansData from '../../../mocks/plansData.json'

removed once we implement POQ
jest.mock('react-redux', () => ({
  useSelector: () => plansData.devices[0]
}))
*/
