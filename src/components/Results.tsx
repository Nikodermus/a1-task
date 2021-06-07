import { Grid, Typography } from '@material-ui/core';
import { useMemo } from 'react';
import { useQuery } from 'react-query';

import type Car from '../types/Car.d';

import { createURLParams } from '../utils/url';
import { getJSON } from '../utils/fetch';
import CarListItem from './CarListItem';
import CarSkeleton from './CarSkeleton';
import Pagination from './Pagination';
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

  const { data } = useQuery<CarsResponse>(
    ['cars', params],
    () => getJSON<CarsResponse>(url),
    { enabled: !!params.page, keepPreviousData: true }
  );

  return (
    <Grid container spacing={3}>
      <Grid item>
        <Typography variant="h5">Available Cars</Typography>
        <Typography>
          {data
            ? `Showing ${data.cars.length} of ${data.totalCarsCount} results`
            : `Bringing more cars...`}
        </Typography>
      </Grid>

      {data?.cars.map((car) => (
        <Grid item xs={12} key={car.stockNumber}>
          <CarListItem car={car} />
        </Grid>
      )) || (
        <Repeat quantity={10}>
          <Grid item xs={12}>
            <CarSkeleton />
          </Grid>
        </Repeat>
      )}

      <Pagination count={data?.totalPageCount || 0} />
    </Grid>
  );
};

export default Results;
