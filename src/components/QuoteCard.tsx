import React from 'react';
import BorderButton from './BorderButton';
import { QuoteContainer } from './styles/Quote.styles';

interface QuoteInterface {
  content: string;
  author: string;
}

const QuoteCard: React.FC<QuoteInterface> = ({ content, author }) => {
  return (
    <QuoteContainer>
      <div className="quote_wrapper">
        <p>“{content}”</p>
        <p>Author: {author}</p>
      </div>
      <BorderButton width="13rem" text="Generate Quote" />
    </QuoteContainer>
  );
};

export default QuoteCard;
