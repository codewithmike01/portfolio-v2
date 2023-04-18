import { screen, render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom';

import Hero from '../Hero';
import { BrowserRouter } from 'react-router-dom';

afterAll(() => cleanup());

const MockHeroComponent = () => {
  return (
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );
};

describe('Hero Section Test', () => {
  it('Name is visible', () => {
    render(<MockHeroComponent />);

    const headingElement = screen.getByRole('heading');

    expect(headingElement.textContent).toBe(
      "HEY THERE 👋,I'M KANU MIKE CHIBUNDU"
    );
  });

  it('Decription should be present', () => {
    render(<MockHeroComponent />);

    const paragraphElement = screen.getByTestId('description');

    expect(paragraphElement.textContent).not.toBe('');
  });
});
