import { Box, Grid, Paper } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const CarSkeleton: React.FC = () => {
  return (
    <Paper variant="outlined" role="status" aria-label="Loading">
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item>
            <Skeleton width={100} height={80} variant="rect" />
          </Grid>

          <Grid item>
            <Box marginBottom={0.5}>
              <Skeleton variant="rect" width={300} height={30} />
            </Box>
            <Box marginBottom={1}>
              <Skeleton variant="rect" width={300} />
            </Box>
            <Skeleton variant="rect" width={128} height={20} />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default CarSkeleton;
