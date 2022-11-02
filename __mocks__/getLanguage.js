module.exports = {
  ...jest.requireActual('../src/components/helpers/getLanguagePreference.js'),
  __esModule: true,
  getLanguagePref: jest.fn().mockReturnValue('pt-BR'),
};
