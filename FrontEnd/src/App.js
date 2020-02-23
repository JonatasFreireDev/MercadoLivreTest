import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '~/components/Header';
import GlobalStyle from '~/styles/globalStyles';

import Routes from './routes';

function App() {
   return (
      <BrowserRouter>
         <Header />
         <GlobalStyle />
         <Routes />
      </BrowserRouter>
   );
}

export default App;
