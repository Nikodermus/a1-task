import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <>
      <CssBaseline />
      <App />
    </>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
