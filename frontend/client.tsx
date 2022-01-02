import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '@assects/styles/global-styles';

import App from './layouts/App';

render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>,
  document.querySelector('#app'),
);
