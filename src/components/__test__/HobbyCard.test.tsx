import { screen, render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom';

import HobbyCard from '../HobbyCard';
import { IoFastFood } from 'react-icons/io5';

afterAll(() => cleanup());

describe('Hoppy section test', () => {
  it('Hobby should be shown', () => {
    render(
      <HobbyCard
        content="Hope from Mike"
        hobby="singing"
        icon={<IoFastFood />}
        id={2}
        key={2}
      />
    );

    const hobby = screen.getByText('singing');
    expect(hobby).toBeVisible();
  });
});
