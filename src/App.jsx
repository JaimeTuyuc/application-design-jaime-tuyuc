/* eslint-disable consistent-return */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  getAllAvailableLocale,
  getAllHomeContent,
  getAllQuotes,
} from './services/quotesService';
import HomePage from './components/pages/Home/HomePage';
import RenderQuotes from './components/pages/Quotes/RenderQuotes';
import { getLanguagePref } from './components/helpers/getLanguagePreference';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const langS = getLanguagePref();
    if (!langS) {
      dispatch(getAllHomeContent('en-US'));
      localStorage.setItem('$lang', 'en-US');
    } else {
      dispatch(getAllHomeContent(langS));
      dispatch(getAllQuotes(langS));
    }
    dispatch(getAllAvailableLocale());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App" data-testid="containerRoutes">
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="quotes" element={<RenderQuotes />} />
      </Routes>
    </div>
  );
};

export default App;

// https://www.youtube.com/watch?v=FV95gk4nfTU
// https://auth0.com/docs/quickstart/spa/react/interactive
