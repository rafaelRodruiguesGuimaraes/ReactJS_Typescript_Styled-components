import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/index';
import { GlobalStyle } from './styles/Global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
