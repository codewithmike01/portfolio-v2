import React, { useState } from 'react';
import BorderButton from './BorderButton';
import { quoteData } from './services/Quotes.service';
import { QuoteContainer } from './styles/Quote.styles';

// Quote index initialization
let index: number = 0;

const QuoteCard = () => {
  const [quotes, setQuotes] = useState({
    id: quoteData[`${index}`].id,
    content: quoteData[`${index}`].quote,
    author: quoteData[`${index}`].author,
  });

  const handleQuote = (): void => {
    if (index === 4) {
      index = -1;
    }

    index = index + 1;
    setQuotes({
      id: quoteData[index].id,
      content: quoteData[index].quote,
      author: quoteData[index].author,
    });
  };
  return (
    <QuoteContainer key={quotes.id}>
      <div className="quote_wrapper">
        <p data-testid="quote__content">“{quotes.content}”</p>
        <p className="author_name">Author: {quotes.author}</p>
      </div>
      <BorderButton width="10rem" text="Next Quote" func={handleQuote} />
    </QuoteContainer>
  );
};

export default QuoteCard;
