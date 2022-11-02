module.exports = {
  ...jest.requireActual('../src/config/config.js'),
  __esModule: true,
  client: jest.fn().mockReturnValue(() => 'value'),
};
