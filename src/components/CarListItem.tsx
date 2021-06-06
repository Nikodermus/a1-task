import { Box, Grid, Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';

import type Car from '../types/Car.d';

import Link from './Link';

export interface CarListItemProps {
  car: Car;
}

const StyledImg = styled.img`
  height: 80px;
  width: 100px;
`;

const CarListItem: React.FC<CarListItemProps> = () => {
  return (
    <Paper variant="outlined">
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item>
            <StyledImg
              alt="Car name"
              src="https://auto1-js-task-api--mufasa71.repl.co/images/car.svg"
            />
          </Grid>

          <Grid item>
            <Typography variant="h5">Mercedes-Benz Vito Tourer</Typography>
            <Typography gutterBottom>
              Stock # 29839 - 107.613 KM - Petrol - Red
            </Typography>
            <Link to="/" color="primary">
              View details
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default CarListItem;
