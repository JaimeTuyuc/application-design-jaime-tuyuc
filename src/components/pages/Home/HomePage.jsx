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
    <BackgroundHomePage data-testid="backgroundHomePage">
      <ContainerLanguage>
        <LangOptions options={localesOption} selectLang={selectLanguage} />
      </ContainerLanguage>
      <MainContainer
        data-testid="bgImage"
        image={backgroundImage?.fields?.file?.url}
      >
        <ContentContainer>
          <h1 data-testid="titleHome">{homeTitle}</h1>

          <p data-testid="descriptionHome">{description}</p>
        </ContentContainer>
        <ButtonQuote role="button" data-testid="seeQuotes" type="button">
          <NavLink to="quotes">
            <span data-testid="buttonQuotes">{buttonQuotes}</span>
          </NavLink>
        </ButtonQuote>
      </MainContainer>
    </BackgroundHomePage>
  );
};

export default HomePage;
