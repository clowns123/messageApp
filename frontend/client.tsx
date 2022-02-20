import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '@assects/styles/global-styles';
import App from './layouts/App';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
const queryClient = new QueryClient();

render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </QueryClientProvider>,
  document.querySelector('#app'),
);
