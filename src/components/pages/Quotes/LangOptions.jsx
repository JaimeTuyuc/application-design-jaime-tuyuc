/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getAllHomeContent,
  getAllQuotes,
} from '../../../services/quotesService';
import { SelectStyle } from './styles/OptionsStyle';

const LangOptions = ({ options, selectLang }) => {
  const dispatch = useDispatch();
  const [langSelected, setLangSelected] = useState({
    code: '',
    lang: '',
  });
  const { lang } = langSelected;

  const checkValue = (e) => {
    const element = options.find((ele) => ele.name === e.target.value);
    setLangSelected({
      ...langSelected,
      lang: e.target.value,
      code: element.code,
    });

    dispatch(getAllHomeContent(element.code));
    dispatch(getAllQuotes(element.code));
    localStorage.setItem('$lang', element.code);
  };

  return (
    <SelectStyle
      data-testid="selectContainer"
      value={lang}
      onChange={checkValue}
    >
      <option data-testid="emptyVal"> -- {selectLang} --</option>
      {options.map((opt) => {
        return (
          <option data-testid="langOpt" key={opt.code} value={opt.name}>
            {opt.name}
          </option>
        );
      })}
    </SelectStyle>
  );
};

export default LangOptions;
