import { render, screen } from '@testing-library/react';
import Repeat from './Repeat';

describe('Repeat', () => {
  it('renders a child given times', () => {
    render(
      <Repeat quantity={3}>
        <p>Text</p>
      </Repeat>
    );

    expect(screen.getAllByText(/text/i).length).toBe(3);
  });
});
