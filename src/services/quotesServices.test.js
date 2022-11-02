/* eslint-disable no-unused-expressions */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import {
  getAllHomeContent,
  getAllQuotes,
  getAllAvailableLocale,
} from './quotesService';
import configureStore from 'redux-mock-store';
import client from '../config/config';
import thunk from 'redux-thunk';
import quotes from '../components/utils/quotes.json';
// const mockedContenful = require('contentful');

jest.mock('../config/config.js');

/*
describe('Test for services of quotes', () => {
  let mockedClient;
  beforeEach(() => {
    jest.mock('contentful');
    mockedClient = mockedContenful.createClient({
      accessToken: 'accesstoken',
      space: 'space',
    });
  });
  it('should pass this empty test', async () => {
    // "quotesPage": { "homeTitle": "Inspirational Quotes", "buttonQuotes": "See Quotes", "changeQuote": "Change", "description": "Inspirational and motivational phrases for your day to day, will help you have a better day", "selectLanguage": "Choose a languge", "backgroundImage": { "fields": { "title": "Home Image", "description": "Backrgound Image quote", "file": { "url": "//images.ctfassets.net/q82gde72vlaf/6hzrNujwVTjcN9TBv8K6GE/875cea269295aadf3f42e962e46e7f3f/backHome.jpeg", "contentType": "image/jpeg"}}} },
    const result = await mockedClient.getEntries({
      content_type: 'quotes',
      locale: 'pt-BR',
    });
    console.log(result, '*-*-*-*-*-');
  });
});

*/

describe('test for quotes services quotesService.js', () => {
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

  describe('tests for getAllHomeContent', () => {
    it('should return entries', async () => {
      await client.getEntries.mockImplementationOnce(() => ({
        items: [{ fields: quotes.quotesPage }],
      }));
      store.dispatch(getAllHomeContent());

      expect(store.getActions()[0].type).toEqual('get_home_data/pending');
    });

    it('should throw a new error', async () => {
      await client.getEntries.mockImplementationOnce(() => {
        throw new Error();
      });
      store.dispatch(getAllHomeContent());
    });
  });

  describe('test for function getAllQuotes', () => {
    it('shold return an array of single quotes', async () => {
      await client.getEntries.mockImplementationOnce(() => ({
        items: quotes.quotes,
      }));
      store.dispatch(getAllQuotes());
      expect(store.getActions()[6].type).toEqual('get_all_quotes/pending');
    });

    it('should throw an error when getting all single quotes', async () => {
      await client.getEntries.mockImplementationOnce(() => {
        throw new Error();
      });

      store.dispatch(getAllQuotes());
    });
  });

  describe('test for getting all availables languages', () => {
    it('should return a list of languages availables', async () => {
      await client.getLocales.mockImplementationOnce(() => ({
        items: quotes.localesOption,
      }));
      store.dispatch(getAllAvailableLocale());
      expect(store.getActions()[12].type).toEqual('get_locales/pending');
    });

    it('should return an error when no locales are found', async () => {
      await client.getLocales.mockImplementationOnce(() => {
        throw new Error();
      });
      store.dispatch(getAllAvailableLocale());
    });
  });
});
