import { render, screen, fireEvent } from '../test-render';

import Pagination from './Pagination';

describe('Pagination', () => {
  window.scrollTo = jest.fn();

  it('renders a pagination given a page count', () => {
    render(<Pagination count={6} />);
    expect(screen.getByText(/page 1 of 6/i)).toBeInTheDocument();
  });

  it('updates with the different buttons', () => {
    render(<Pagination count={13} />);

    fireEvent.click(screen.getByRole('button', { name: /next/i })); // +1
    expect(screen.getByText(/page 2 of 13/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /next/i })); // +1
    expect(screen.getByText(/page 3 of 13/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /previous/i })); // -1
    expect(screen.getByText(/page 2 of 13/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /last/i }));
    expect(screen.getByText(/page 13 of 13/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /first/i }));
    expect(screen.getByText(/page 1 of 13/i)).toBeInTheDocument();
  });

  it('sends the user to the top when a page is changed', () => {
    render(<Pagination count={42} />);

    const scrollTo = jest.fn();
    window.scrollTo = scrollTo;

    fireEvent.click(screen.getByRole('button', { name: /last/i }));

    expect(scrollTo).toHaveBeenCalledTimes(1);
  });

  it("disables buttons when you can't move in that direction", () => {
    render(<Pagination count={777} />);

    // Initial render, disable prev
    expect(screen.getByRole('button', { name: /first/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /previous/i })).toBeDisabled();

    // Enable next
    expect(screen.getByRole('button', { name: /last/i })).not.toBeDisabled();
    expect(screen.getByRole('button', { name: /next/i })).not.toBeDisabled();

    // Go to a middle page
    fireEvent.click(screen.getByRole('button', { name: /next/i }));

    // Enable all
    expect(screen.getByRole('button', { name: /first/i })).not.toBeDisabled();
    expect(
      screen.getByRole('button', { name: /previous/i })
    ).not.toBeDisabled();

    // Go to end
    fireEvent.click(screen.getByRole('button', { name: /last/i }));

    // Disable next
    expect(screen.getByRole('button', { name: /last/i })).toBeDisabled();
    expect(screen.getByRole('button', { name: /next/i })).toBeDisabled();
  });
});
