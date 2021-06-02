import { AppBar, Grid } from '@material-ui/core';
import styled from 'styled-components';

import Link from './Link';
import logo from '../images/logo.png';

const StyledImg = styled.img`
  width: 150px;
`;

const StyledAppBar = styled(AppBar)`
  height: 80px;
  padding-left: 24px;
  padding-right: 24px;
`;

const Nav: React.FC = () => {
  return (
    <StyledAppBar color="transparent" position="static" variant="outlined">
      <Grid container spacing={3} alignItems="center" justify="space-between">
        <Grid item>
          <h1>
            <Link to="/">
              <StyledImg src={logo} alt="A1 Logo" />
            </Link>
          </h1>
        </Grid>

        <Grid component="nav" item>
          <Grid container spacing={3}>
            <Grid item>
              <Link to="/">Purchase</Link>
            </Grid>

            <Grid item>
              <Link to="/">My Orders</Link>
            </Grid>

            <Grid item>
              <Link to="/">Sell</Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledAppBar>
  );
};

export default Nav;
