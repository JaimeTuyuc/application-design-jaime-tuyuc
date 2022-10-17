const contenful = require('contentful');

const client = contenful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  locale: 'pt-BR',
});

export default client;
