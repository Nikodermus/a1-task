import { Grid, Typography } from '@material-ui/core';
import { useMemo } from 'react';
import { useQuery } from 'react-query';

import type Car from '../types/Car.d';

import { createURLParams } from '../utils/string';
import { getJSON } from '../utils/fetch';
import CarListItem from './CarListItem';
import CarSkeleton from './CarSkeleton';
import Repeat from './Repeat';
import useURLParams from '../hooks/useURLParams';

interface CarsResponse {
  cars: Car[];
  totalCarsCount: number;
  totalPageCount: number;
}

const Results: React.FC = () => {
  const params = useURLParams();
  const url = useMemo(() => createURLParams('cars', params), [params]);

  const { data } = useQuery<CarsResponse>(['cars', params], () =>
    getJSON<CarsResponse>(url)
  );

  const { totalPageCount = 0, totalCarsCount = 0 } = data || {};

  return (
    <Grid container spacing={3}>
      <Grid item>
        <Typography variant="h5">Available Cars</Typography>
        <Typography>
          Showing {totalPageCount} of {totalCarsCount} results
        </Typography>
      </Grid>

      {data?.cars.map((car) => (
        <Grid item xs={12} key={`${car.manufacturerName} ${car.modelName}`}>
          <CarListItem car={car} />
        </Grid>
      )) || (
        <Repeat quantity={6}>
          <Grid item xs={12}>
            <CarSkeleton />
          </Grid>
        </Repeat>
      )}

      <Repeat quantity={3} />
    </Grid>
  );
};

export default Results;
