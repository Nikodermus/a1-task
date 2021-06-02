import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CarDetail from './pages/CarDetail';
import Dashboard from './pages/Dashboard';
import Nav from './components/Nav';
import NotFound from './pages/404';
import theme from './constants/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Nav />

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
      </Router>
    </ThemeProvider>
  );
};

export default App;
