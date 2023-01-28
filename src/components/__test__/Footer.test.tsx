import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';

// afterAll(() => cleanup());

describe('Footer Unit Test', () => {
  // Render Footer component
  it('trade Mark text present', () => {
    render(<Footer />);
    const tradeMark = screen.getByText('Powered by Royal Stack');
    expect(tradeMark).toBeInTheDocument();
  });

  it('Link Elements to have length 5 and All href Link correct', () => {
    render(<Footer />);
    const linkElements = screen.getAllByRole('link');
    console.log(linkElements.length);
    expect(linkElements.length).toEqual(5);

    expect(linkElements[0]).toHaveAttribute(
      'href',
      'https://github.com/Ginohmk'
    );
    expect(linkElements[1]).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/mike-kanu-dev/'
    );
    expect(linkElements[2]).toHaveAttribute(
      'href',
      'https://twitter.com/michotall95'
    );
    expect(linkElements[3]).toHaveAttribute(
      'href',
      'https://web.facebook.com/mike.kanu/'
    );
    expect(linkElements[4]).toHaveAttribute(
      'href',
      'https://www.instagram.com/savy_kanu_mike/'
    );
  });
});
