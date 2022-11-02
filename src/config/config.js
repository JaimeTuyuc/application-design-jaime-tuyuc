/* import { createClient } from 'contentful';

export default createClient({
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  space: process.env.REACT_APP_SPACE_ID,
});
*/

const contenful = require('contentful');

const client = contenful.createClient({
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  space: process.env.REACT_APP_SPACE_ID,
});

export default client;

/*
const contenful = require('contentful');

const client = contenful.createClient({
  accessToken: 'l5nhHFeVORUa8MoX2fKTk2WgbqbX1UygdKJhtZoNIOc',
  space: 'q82gde72vlaf',
});
*/
