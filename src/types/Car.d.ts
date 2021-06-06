interface Car {
  color: string;
  fuelType: string;
  manufacturerName: string;
  mileage: Mileage;
  modelName: string;
  pictureUrl: string;
  stockNumber: number;
}

interface Mileage {
  number: number;
  unit: 'km' | 'ml';
}

export default Car;
