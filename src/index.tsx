import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { StrictMode } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ReactDOM from 'react-dom';

import { queryClient } from './utils/fetch';
import App from './App';
import BaseStyle from './components/BaseStyle';
import reportWebVitals from './reportWebVitals';
import theme from './constants/theme';

ReactDOM.render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BaseStyle />
          <CssBaseline />
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
