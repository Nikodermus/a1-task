import { Grid } from '@material-ui/core';

import FilterBox from '../components/FilterBox';
import Results from '../components/Results';

const Dashboard: React.FC = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={4}>
        <FilterBox />
      </Grid>

      <Grid item xs={8}>
        <Results />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
