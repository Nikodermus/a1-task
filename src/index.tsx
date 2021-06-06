import { StrictMode } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ReactDOM from 'react-dom';

import App from './App';
import BaseStyle from './components/BaseStyle';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <StrictMode>
    <>
      <BaseStyle />
      <CssBaseline />
      <App />
    </>
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
