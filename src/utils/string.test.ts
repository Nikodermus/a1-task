import { getCarDetails, capitalize } from './string';

describe('getCarDetails', () => {
  it('formats in two text parts a car detail ', () => {
    expect(
      getCarDetails({
        color: 'blue',
        fuelType: 'Diesel',
        manufacturerName: 'Mercedes-Benz',
        modelName: 'R-Klasse',
        pictureUrl: 'http://test.com/car.svg',
        stockNumber: 10009,
        mileage: {
          number: 152957,
          unit: 'km',
        },
      })
    ).toEqual({
      details: 'Stock #10009 - 152.957 KM - Diesel - Blue',
      fullName: 'Mercedes-Benz R-Klasse',
    });
  });
});

describe('capitalize', () => {
  it('capitalizes a word', () => {
    expect(capitalize('batman')).toEqual('Batman');
    expect(capitalize('chewbacca')).toEqual('Chewbacca');
  });

  it('capitalizes each word in a phrase', () => {
    expect(capitalize('batman is cool')).toEqual('Batman Is Cool');
    expect(capitalize('chewbacca is fluffy')).toEqual('Chewbacca Is Fluffy');
  });

  it('keeps the other letters in the word untouched', () => {
    expect(capitalize('bAtmAn')).toEqual('BAtmAn');
  });
});
