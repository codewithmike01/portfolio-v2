import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';

afterAll(() => cleanup());

describe('Footer Component Test', () => {
  // Render Footer component
  it('trade Mark text present', () => {
    render(<Footer />);
    const tradeMark = screen.getByText('Powered by Royal Code Mate');
    expect(tradeMark).toBeInTheDocument();
  });

  it('Link Elements counts and Correct href', () => {
    render(<Footer />);
    const linkElements = screen.getAllByRole('link');

    // Count link element
    expect(linkElements.length).toEqual(5);

    // Github Link href
    expect(linkElements[0]).toHaveAttribute(
      'href',
      'https://github.com/Ginohmk'
    );

    // LinkedIn Link href
    expect(linkElements[1]).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/mike-kanu-dev/'
    );

    // Twitter Link href
    expect(linkElements[2]).toHaveAttribute(
      'href',
      'https://twitter.com/michotall95'
    );

    // Facebook Link href
    expect(linkElements[3]).toHaveAttribute(
      'href',
      'https://web.facebook.com/mike.kanu/'
    );

    // Instagram Link href
    expect(linkElements[4]).toHaveAttribute(
      'href',
      'https://www.instagram.com/savy_kanu_mike/'
    );
  });
});
