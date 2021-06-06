import { Grid } from '@material-ui/core';

import FilterBox from '../components/FilterBox';
import Results from '../components/Results';

const Dashboard: React.FC = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={3}>
        <FilterBox />
      </Grid>

      <Grid item xs={9}>
        <Results cars={[]} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
