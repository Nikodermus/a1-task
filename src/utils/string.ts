import type Car from '../types/Car.d';

export const capitalize = (str: string): string =>
  str
    .split(' ')
    .map((word: string) =>
      word.replace(/^\w/, (letter: string) => letter.toLocaleUpperCase())
    )
    .join(' ');

export const formatNumber = (number: number): string =>
  new Intl.NumberFormat('de-DE').format(number);

export const getCarDetails = (
  car: Car
): { fullName: string; details: string } => {
  const { color, fuelType, manufacturerName, mileage, modelName, stockNumber } =
    car;

  return {
    fullName: `${manufacturerName} ${modelName}`,
    details: `Stock #${stockNumber} - ${formatNumber(
      mileage.number
    )} ${mileage.unit.toLocaleUpperCase()} - ${fuelType} - ${capitalize(
      color
    )}`,
  };
};
