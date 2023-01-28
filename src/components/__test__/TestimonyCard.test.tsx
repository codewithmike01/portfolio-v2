import { render, screen, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom';
import TestimonyCard from '../TestimonyCard';
import { FaGithubSquare } from 'react-icons/fa'; //Behance icon

afterAll(() => cleanup());

describe('Testimony Componet Test', () => {
  it('Count testimony', () => {
    render(
      <TestimonyCard
        id={3}
        name="Frankly James"
        profession="Developer"
        icon={<FaGithubSquare />}
        testify=""
        link=""
        image=""
      />
    );

    const userName = screen.getByText('Frankly James');
    const professionName = screen.getByText('Developer');

    expect(userName).toBeInTheDocument();
    expect(professionName).toBeInTheDocument();
  });
});
