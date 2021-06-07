import { render, screen } from '../test-render';

import CarListItem from './CarListItem';

describe('CarListItem', () => {
  it('renders all the info for a car', () => {
    render(
      <CarListItem
        car={{
          stockNumber: 10009,
          manufacturerName: 'Mercedes-Benz',
          modelName: 'R-Klasse',
          color: 'blue',
          mileage: {
            number: 152957,
            unit: 'km',
          },
          fuelType: 'Diesel',
          pictureUrl: 'http://test.com/car.svg',
        }}
      />
    );

    // Titles
    expect(
      screen.getByRole('heading', { name: /Mercedes-Benz/ })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /R-Klasse/ })
    ).toBeInTheDocument();

    // Text
    expect(screen.getByText(/blue/i)).toBeInTheDocument();
    expect(screen.getByText(/diesel/i)).toBeInTheDocument();

    // Image
    expect((screen.getByRole('img') as HTMLImageElement).src).toBe(
      'http://test.com/car.svg'
    );

    // Link to detail
    expect(screen.getByRole('link', { name: /View details/i })).toHaveAttribute(
      'href',
      '/car/10009'
    );
  });
});
