import { Box, Grid, Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';

import type Car from '../types/Car.d';

import { getCarDetails } from '../utils/string';
import Link from './Link';

export interface CarListItemProps {
  car: Car;
}

const StyledImg = styled.img`
  height: 80px;
  width: 100px;
`;

const CarListItem: React.FC<CarListItemProps> = ({ car }) => {
  const { fullName, details } = getCarDetails(car);
  const { pictureUrl, stockNumber } = car;

  return (
    <Paper variant="outlined">
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item>
            <StyledImg alt={fullName} src={pictureUrl} />
          </Grid>

          <Grid item>
            <Typography variant="h5">{fullName}</Typography>
            <Typography gutterBottom>{details}</Typography>
            <Link to={`/car/${stockNumber}`} color="primary">
              View details
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default CarListItem;
