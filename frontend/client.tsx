import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '@assects/styles/global-styles';
import App from './layouts/App';
import { RecoilRoot } from 'recoil';

render(
  <RecoilRoot>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </RecoilRoot>,
  document.querySelector('#app'),
);
