/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  RenderQuotesConatiner,
  SubContainer,
  ContentContainer,
  ButtonChange,
} from './styles/RenderStyles';
import { quotesAction } from '../../../features/quotesSlice';

const RenderQuotes = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const {
    individualQuotes,
    quotesPage: { changeQuote },
    quoteRender,
  } = useSelector((state) => state.quotes);

  const changeQuoteHandler = () => {
    const random = Math.floor(Math.random() * individualQuotes.length);
    dispatch(quotesAction.dispatchSingleQuote(individualQuotes[random]));
  };

  return (
    <RenderQuotesConatiner>
      <SubContainer image={quoteRender?.fields?.image?.fields?.file?.url}>
        <ContentContainer>
          <h3>{quoteRender?.fields?.title}</h3>
          <p>{quoteRender?.fields?.description}</p>
        </ContentContainer>

        <ButtonChange onClick={changeQuoteHandler} type="button">
          {changeQuote}
        </ButtonChange>
      </SubContainer>
    </RenderQuotesConatiner>
  );
};

export default RenderQuotes;
