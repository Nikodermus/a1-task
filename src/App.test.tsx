import { render, screen } from './test-render';

import App from './App';

describe('App', () => {
  window.scrollTo = jest.fn();

  it('renders without crashing', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: 'A1 Logo' })
    ).toBeInTheDocument();
  });
});
