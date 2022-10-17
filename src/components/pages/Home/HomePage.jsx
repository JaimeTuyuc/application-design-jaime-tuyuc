/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  BackgroundHomePage,
  ButtonQuote,
  ContentContainer,
  MainContainer,
  ContainerLanguage,
} from './styles/HomeStyles';
import LangOptions from '../Quotes/LangOptions';

const HomePage = () => {
  const {
    quotesPage: {
      homeTitle,
      description,
      buttonQuotes,
      backgroundImage,
      selectLanguage,
    },
    localesOption,
  } = useSelector((state) => state.quotes);

  return (
    <BackgroundHomePage>
      <ContainerLanguage>
        <LangOptions options={localesOption} selectLang={selectLanguage} />
      </ContainerLanguage>
      <MainContainer image={backgroundImage?.fields?.file?.url}>
        <ContentContainer>
          <h1>{homeTitle}</h1>

          <p>{description}</p>
        </ContentContainer>
        <ButtonQuote type="button">
          <NavLink to="quotes">
            <span>{buttonQuotes}</span>
          </NavLink>
        </ButtonQuote>
      </MainContainer>
    </BackgroundHomePage>
  );
};

export default HomePage;
