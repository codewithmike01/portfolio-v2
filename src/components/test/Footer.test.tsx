import { screen, render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';

afterAll(() => cleanup());

describe('Footer Unit Test', () => {
  // Render Footer component
  render(<Footer />);
  it('trade Mark text present', () => {
    const tradeMark = screen.getByText('Powered by Royal Stack');
    expect(tradeMark).toBeInTheDocument();
  });
});
