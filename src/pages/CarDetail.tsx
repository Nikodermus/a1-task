import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import type Car from '../types/Car.d';

import { getCarDetails } from '../utils/string';
import { getJSON } from '../utils/fetch';
import Button from '../components/Button';

interface CarResponse {
  car: Car;
}

const StyledImg = styled.img`
  height: 300px;
  margin-bottom: 24px;
  object-fit: cover;
  width: 100%;
`;

const StyledButton = styled(Button)`
  align-self: flex-end;
`;

const CarDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useQuery<CarResponse>(['car', id], () =>
    getJSON<CarResponse>(`cars/${id}`)
  );

  const { fullName = '', details = '' } = data ? getCarDetails(data.car) : {};
  const { pictureUrl = '' } = data?.car || {};

  return (
    <>
      {data && (
        <>
          <header>
            <StyledImg src={pictureUrl} alt={fullName} />
          </header>
          <Box maxWidth={800} margin="auto">
            <Grid container spacing={4}>
              <Grid item xs={7}>
                <Typography variant="h4" gutterBottom>
                  {fullName}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {details}
                </Typography>
                <Typography>
                  This car is currently available and can be delivered as soon
                  as tomorrow morning. Please be aware that delivery times shown
                  in this page are not definitive and may change due to bad
                  weather conditions.
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Card variant="outlined">
                  <CardContent>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="stretch"
                      paddingTop={1}
                      px={1}
                    >
                      <Typography gutterBottom variant="body2">
                        If you like this car, click the button and save it in
                        your collection of favourite items.
                      </Typography>

                      <StyledButton
                        color="primary"
                        disableElevation
                        variant="contained"
                      >
                        Save
                      </StyledButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};

export default CarDetail;
