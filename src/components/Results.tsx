import { Grid, Typography } from '@material-ui/core';

import type Car from '../types/Car.d';

import CarListItem from './CarListItem';
import CarSkeleton from './CarSkeleton';
import Repeat from './Repeat';

export interface ResultsProps {
  cars: Car[];
}

const Results: React.FC<ResultsProps> = () => {
  return (
    <Grid container spacing={3}>
      <Grid item>
        <Typography variant="h5">Available Cars</Typography>
        <Typography>Showing 10 of 100 results</Typography>
      </Grid>

      <Repeat quantity={3}>
        <Grid item xs={12}>
          <CarListItem car={{} as Car} />
        </Grid>
      </Repeat>

      <Repeat quantity={3}>
        <Grid item xs={12}>
          <CarSkeleton />
        </Grid>
      </Repeat>
    </Grid>
  );
};

export default Results;
