/* eslint-disable consistent-return */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllAvailableLocale,
  getAllHomeContent,
  getAllQuotes,
} from './services/quotesService';
import HomePage from './components/pages/Home/HomePage';
import RenderQuotes from './components/pages/Quotes/RenderQuotes';

const App = () => {
  const dispatch = useDispatch();
  const { lang } = useSelector((state) => state.quotes);

  const getLanguagePref = () => {
    try {
      const savelang = localStorage.getItem('$lang');
      return savelang;
    } catch (error) {
      console.log(error, 'no saved data');
    }
  };
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
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="quotes" element={<RenderQuotes />} />
      </Routes>
    </div>
  );
};

export default App;
