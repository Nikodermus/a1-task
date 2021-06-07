import { Box } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

import CarDetail from './pages/CarDetail';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Nav from './components/Nav';
import NotFound from './pages/404';

const App: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Nav />

      <Box marginBottom={3} component="main" px={3}>
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>

          <Route path="/car/:id">
            <CarDetail />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Box>

      <Footer />
    </Box>
  );
};

export default App;
