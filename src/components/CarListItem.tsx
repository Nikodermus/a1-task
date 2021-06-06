import { Box, Grid, Paper, Typography } from '@material-ui/core';
import styled from 'styled-components';

import type Car from '../types/Car.d';

import { capitalize } from '../utils/string';
import { formatNumber } from '../utils/url';
import Link from './Link';

export interface CarListItemProps {
  car: Car;
}

const StyledImg = styled.img`
  height: 80px;
  width: 100px;
`;

const CarListItem: React.FC<CarListItemProps> = ({ car }) => {
  const {
    color,
    fuelType,
    manufacturerName,
    mileage,
    modelName,
    pictureUrl,
    stockNumber,
  } = car;
  const fullName = `${manufacturerName} ${modelName}`;
  const details = `Stock #${stockNumber} - ${formatNumber(
    mileage.number
  )} ${mileage.unit.toLocaleUpperCase()} - ${fuelType} - ${capitalize(color)}`;

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
