import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuoteCard from '../QuoteCard';

afterAll(() => cleanup());

describe('Quote Card test', () => {
  // Show the Quote on page
  it('Shows Quote', () => {
    render(<QuoteCard />);

    const quoteContent = screen.getByTestId('quote__content');

    expect(quoteContent).toBeInTheDocument();
    expect(quoteContent).not.toBe('');
  });

  // Button function in Quote card
  // it()
});
