import { StrictMode } from 'react';
import { QueryClientProvider } from 'react-query';
import CssBaseline from '@material-ui/core/CssBaseline';
import ReactDOM from 'react-dom';

import { queryClient } from './utils/fetch';
import App from './App';
import BaseStyle from './components/BaseStyle';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BaseStyle />
      <CssBaseline />
      <App />
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
