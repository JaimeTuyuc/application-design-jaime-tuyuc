/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
export const getLanguagePref = () => {
  const savelang = localStorage.getItem('$lang');
  return savelang;
};
